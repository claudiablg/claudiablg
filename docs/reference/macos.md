---
subject: Reference
title: MacOS Settings Reference
description: Useful Settings for MacOS Users
tags:
  - hardware
  - OS
status: draft
---

<DocHeader props={props}/>

## Subpixel Aliasing

Source:
https://www.howtogeek.com/358596/how-to-fix-blurry-fonts-on-macos-mojave-with-subpixel-antialiasing/

```
defaults write -g CGFontRenderingFontSmoothingDisabled -bool NO
defaults -currentHost write -globalDomain AppleFontSmoothing -int 3
```

## Change Hostname / Computer Name

```bash
sudo scutil --set ComputerName "mac-phil"
sudo scutil --set LocalHostName "mac-phil"
sudo scutil --set HostName "mac-phil"
```

## Tools

### Raycast

```bash
brew install --cask raycast
```
