import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { IoPauseOutline, IoPlayOutline, IoReloadOutline } from 'react-icons/io5';
import { useStyles } from 'react-treat';

import { ButtonIcon, ButtonSize, Variant } from '@newrade/core-design-system';

import { Button } from '../button/button';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Cluster } from '../layout/cluster';
import { PrimitiveProps } from '../primitive/primitive.props';

import * as styleRefs from './css-animation.treat';

export type CSSAnimationState = 'running' | 'paused';
export type CSSAnimationProps = {
  /**
   * Predefined keyframe animation
   */
  name: keyof typeof styleRefs.animations;
  /**
   * Iteration count
   */
  iterationCount?: number | 'infinity';
  /**
   * AnimationDuration in ms or as CSS string
   */
  duration?: number | string;
  /**
   * AnimationDelay in ms or as CSS string
   */
  delay?: number | string;
  /**
   * AnimationDirection
   */
  direction?: 'alternate' | 'alternate-reverse' | 'normal' | 'reverse';
  /**
   * FillMode
   */
  fillMode?: 'backwards' | 'both' | 'forwards' | 'none';
  /**
   * AnimationDirection
   */
  playState?: CSSAnimationState;
  /**
   * Custom timing function
   */
  timingFunction?: string;
};

type Props = PrimitiveProps<'div' | 'nav'> & {
  animation?: CSSAnimationProps;
  showControls?: boolean;
  onAnimationEnd?: (event: AnimationEvent) => void;
};

/**
 * Used to type the ref.current for parent component
 */
export type CSSAnimationHandle = React.ElementRef<typeof CSSAnimation>;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations
 */
export const CSSAnimation = React.forwardRef<
  HTMLElement & { reset: () => any; ref: React.RefObject<HTMLDivElement> },
  Props
>(
  (
    {
      id,
      style,
      className,
      classNames,
      animation,
      onAnimationEnd,
      showControls,
      as,
      AsElement,
      children,
      ...props
    },
    ref
  ) => {
    const { styles, animations } = useStyles(styleRefs);
    const { theme, cssTheme } = useTreatTheme();

    // pass animation values as custom properties
    const animationCssProps = {
      '--animation-delay':
        typeof animation?.delay === 'number' ? `${animation.delay}ms` : animation?.delay,
      '--animation-duration':
        typeof animation?.duration === 'number' ? `${animation.duration}ms` : animation?.duration,
      '--animation-iteration':
        typeof animation?.iterationCount === 'number' ? `${animation.iterationCount}` : '1',
    };

    const commonProps = useCommonProps<'div'>({
      id,
      style: {
        ...style,
        ...animationCssProps,
        animationPlayState: animation?.playState || 'paused',
      },
      className,
      classNames: [
        ...(classNames ? classNames : []),
        styles.wrapper,
        animations[animation?.name || 'bounce'],
      ],
      ...props,
    });
    const [previousState, setPreviousState] = useState<CSSAnimationState | undefined>('paused');

    const divRef = useRef<HTMLDivElement>(null);
    const currentDivRef = divRef?.current;

    function handlePlayPause(event: React.MouseEvent<any>) {
      setPreviousState(previousState === 'paused' ? 'running' : 'paused');
    }

    function handleReset(event: React.MouseEvent<any>) {
      reset(divRef?.current);
      setPreviousState('paused');
    }

    // controlled mode via prop
    if (animation?.playState && animation?.playState !== previousState) {
      setPreviousState(animation?.playState);

      if (animation?.playState === 'running') {
        if (currentDivRef?.style.animationName === 'none') {
          currentDivRef.style.animationName = '';
        }

        play();
      }

      if (animation?.playState === 'paused') {
        pause();
      }
    }

    // internally controlled mode
    if (!animation?.playState) {
      if (previousState === 'running') {
        if (currentDivRef?.style.animationName === 'none') {
          unset(currentDivRef);
        }

        play();
      }

      if (previousState === 'paused') {
        pause();
      }
    }

    /**
     * Handle event listeners
     */
    useEffect(() => {
      const currentRef = divRef?.current;

      function handleAnimationEnd(event: AnimationEvent) {
        if (divRef?.current && !animation?.playState) {
          divRef.current.style.animationPlayState = 'paused';
        }

        if (onAnimationEnd) {
          onAnimationEnd(event);
        }
      }

      // by default, animation state does not go to pause
      // at the end, we set it correctly to be able to reset it
      if (currentRef) {
        currentRef.addEventListener('animationend', handleAnimationEnd);
      }

      return () => {
        // clean up event listener
        if (currentRef) {
          currentRef.removeEventListener('animationend', handleAnimationEnd);
        }
      };
    }, [onAnimationEnd, animation?.playState]);

    // allow parent to reset the animation state
    useImperativeHandle<CSSAnimationHandle, any>(ref, () => ({
      get ref() {
        return divRef;
      },
      reset() {
        reset(divRef?.current);
      },
    }));

    /**
     * Helper functions
     */

    // handle internal state for animation end

    function play() {
      if (currentDivRef) {
        currentDivRef.style.animationPlayState = 'running';
      }
    }

    function pause() {
      if (currentDivRef) {
        currentDivRef.style.animationPlayState = 'paused';
      }
    }

    function unset(scopedRef?: HTMLDivElement | null) {
      if (scopedRef) {
        scopedRef.style.animationName = '';
      }
    }

    function reset(scopedRef?: HTMLDivElement | null) {
      if (scopedRef) {
        scopedRef.style.animationName = 'none';
        scopedRef.style.animationPlayState = 'paused';
      }
    }

    function ControlButtons() {
      return (
        <Cluster
          justifyContent={['flex-start']}
          gap={[cssTheme.sizing.var.x1]}
          className={styles.controls}
        >
          <Button
            variant={Variant.tertiary}
            size={ButtonSize.small}
            icon={ButtonIcon.icon}
            Icon={previousState === 'paused' ? <IoPlayOutline /> : <IoPauseOutline />}
            onClick={handlePlayPause}
          >
            {previousState === 'paused' ? 'Play' : 'Pause'}
          </Button>
          <Button
            variant={Variant.tertiary}
            size={ButtonSize.small}
            icon={ButtonIcon.icon}
            Icon={<IoReloadOutline />}
            onClick={handleReset}
          >
            Reset
          </Button>
        </Cluster>
      );
    }

    if (showControls) {
      return (
        <div className={styles.controlsWrapper}>
          <ControlButtons />

          <div ref={divRef} {...commonProps}>
            {children}
          </div>
        </div>
      );
    }

    const CustomAsElement = AsElement
      ? React.cloneElement(
          AsElement as React.ReactElement,
          {
            ref: divRef,
            ...commonProps,
          },
          children
        )
      : null;

    if (CustomAsElement) {
      return CustomAsElement;
    }

    const CustomElement = as
      ? React.createElement(as, { ref: divRef, ...commonProps }, children)
      : null;

    if (CustomElement) {
      return CustomElement;
    }

    return (
      <div ref={divRef} {...commonProps}>
        {children}
      </div>
    );
  }
);
