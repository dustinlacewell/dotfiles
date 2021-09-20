;;; xresources-theme.el --- Use your .Xresources as your emacs theme

;; Copyright (C) 2014-2014 Marten Lienen <marten.lienen@gmail.com>

;; Author: Marten Lienen <marten.lienen@gmail.com>
;; Keywords: xresources, theme
;; Version: 0.2.0

;; This file is not part of GNU Emacs.

;; This program is free software; you can redistribute it and/or modify it under
;; the terms of the GNU General Public License as published by the Free Software
;; Foundation; either version 3, or (at your option) any later version.
;;
;; This program is distributed in the hope that it will be useful, but WITHOUT
;; ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
;; FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more
;; details.
;;
;; You should have received a copy of the GNU General Public License along with
;; GNU Emacs; see the file COPYING.  If not, write to the Free Software
;; Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301,
;; USA.

;;; Commentary:

;; Use the colors defined in your .Xresources as your emacs theme

;;; Code:
(require 'color)

(defun xresources-theme-color (name)
  "Read the color NAME (e.g. color5) from the X resources."
  (x-get-resource name ""))

(defun set-luminosity (hex amt)
  (-let* (((r g b) (color-name-to-rgb hex))
          ((h s l) (color-rgb-to-hsl r g b))
          ((r g b) (color-hsl-to-rgb h s amt)))
    (color-rgb-to-hex r g b)))

(defun set-saturation (hex amt)
  (-let* (((r g b) (color-name-to-rgb hex))
          ((h s l) (color-rgb-to-hsl r g b))
          ((r g b) (color-hsl-to-rgb h amt l)))
    (color-rgb-to-hex r g b)))

(defun set-both (hex lum sat)
  (set-luminosity (set-saturation hex sat) lum))

(defun scale-luminosity (hex amt)
  (-let* (((r g b) (color-name-to-rgb hex))
          ((h s l) (color-rgb-to-hsl r g b))
          ((r g b) (color-hsl-to-rgb h s (* amt l))))
    (color-rgb-to-hex r g b)))

(defun scale-saturation (hex amt)
  (-let* (((r g b) (color-name-to-rgb hex))
          ((h s l) (color-rgb-to-hsl r g b))
          ((r g b) (color-hsl-to-rgb h (* amt s) l)))
    (color-rgb-to-hex r g b)))

(defun scale-both (hex lum sat)
  (set-luminosity (set-saturation hex sat) lum))

(deftheme xresources "~/.Xresources as a theme")

(setq theme-colors
  '((foreground "{foreground}")
       (background "{background}")
       (black "{color0}")
       (red "{color1}")
       (green "{color2}")
       (yellow "{color3}")
       (blue "{color4}")
       (magenta "{color5}")
       (cyan "{color6}")
       (gray "{color7}")
       (light-gray "{color8}")
       (light-red "{color9}")
       (light-green "{color10}")
       (light-yellow "{color11}")
       (light-blue "{color12}")
       (light-magenta "{color13}")
       (light-cyan "{color14}")
       (white "{color15}")))

(defun theme-color (symbol)
  (car (alist-get symbol theme-colors)))

(let ((foreground (theme-color 'foreground))
      (background (theme-color 'background))
      (black (theme-color 'black))
      (red (theme-color 'red))
      (green (theme-color 'green))
      (yellow (theme-color 'yellow))
      (blue (theme-color 'blue))
      (magenta (theme-color 'magenta))
      (cyan (theme-color 'cyan))
      (gray (theme-color 'gray))
      (light-gray (theme-color 'light-gray))
      (light-red (theme-color 'light-red))
      (light-green (theme-color 'light-green))
      (light-yellow (theme-color 'light-yellow))
      (light-blue (theme-color 'light-blue))
      (light-magenta (theme-color 'light-magenta))
      (light-cyan (theme-color 'light-cyan))
      (white (theme-color 'white)))
  (set-mouse-color foreground)

  ;; new faces
  (cl-loop
   for (face . spec) in
   `((org-todo-face . ((t (:bold t :foreground ,(set-saturation red 1) :weight bold))))
     (org-doing-face . ((t (:bold t :foreground ,(set-saturation blue 1) :weight bold))))
     (org-done-face . ((t (:bold t :foreground ,(set-saturation green 1) :weight bold))))
     (org-soon-face . ((t (:bold t :foreground ,(set-saturation yellow 1) :weight bold))))
     (org-someday-face . ((t (:bold t :foreground ,(set-saturation magenta 1) :weight bold)))))
   do (face-spec-set face spec))

   ;; built-in faces
  (custom-theme-set-faces
   'xresources

   ;; basic coloring
   '(button ((t (:underline t))))
   `(link ((t (:foreground ,yellow :underline t :weight bold))))
   `(link-visited ((t (:foreground ,yellow :underline t :weight normal))))
   `(default ((t (:foreground ,foreground :background ,background))))
   `(cursor ((t (:foreground ,white :background ,foreground))))
   `(escape-glyph ((t (:foreground ,yellow :bold t))))
   `(fringe ((t (:foreground ,foreground :background ,background))))
   `(header-line ((t (:foreground ,yellow
                                  :background ,background
                                  :box (:line-width -1 :style released-button)))))
   `(highlight ((t (:background ,background))))
   `(success ((t (:foreground ,green :weight bold))))
   `(warning ((t (:foreground ,red :weight bold))))

   ;; compilation
   `(compilation-column-face ((t (:foreground ,yellow))))
   `(compilation-enter-directory-face ((t (:foreground ,green))))
   `(compilation-error-face ((t (:foreground ,red :weight bold :underline t))))
   `(compilation-face ((t (:foreground ,foreground))))
   `(compilation-info-face ((t (:foreground ,blue))))
   `(compilation-info ((t (:foreground ,green :underline t))))
   `(compilation-leave-directory-face ((t (:foreground ,green))))
   `(compilation-line-face ((t (:foreground ,yellow))))
   `(compilation-line-number ((t (:foreground ,yellow))))
   `(compilation-message-face ((t (:foreground ,blue))))
   `(compilation-warning-face ((t (:foreground ,red :weight bold :underline t))))
   `(compilation-mode-line-exit ((t (:foreground ,green :weight bold))))
   `(compilation-mode-line-fail ((t (:foreground ,red :weight bold))))
   `(compilation-mode-line-run ((t (:foreground ,yellow :weight bold))))

   ;; grep
   `(grep-context-face ((t (:foreground ,foreground))))
   `(grep-error-face ((t (:foreground ,red :weight bold :underline t))))
   `(grep-hit-face ((t (:foreground ,blue))))
   `(grep-match-face ((t (:foreground ,red :weight bold))))
   `(match ((t (:background ,background :foreground ,red :weight bold))))

   ;; isearch
   `(isearch ((t (:foreground ,yellow :weight bold :background ,background))))
   `(isearch-fail ((t (:foreground ,foreground :background ,red))))
   `(lazy-highlight ((t (:foreground ,yellow :weight bold :background ,background))))

   `(menu ((t (:foreground ,foreground :background ,background))))
   `(minibuffer-prompt ((t (:foreground ,yellow))))
   `(mode-line
     ((t (:foreground ,green
                      :background ,background
                      :box (:line-width -1 :style released-button)))
      (t :inverse-video t)))
   `(mode-line-buffer-id ((t (:foreground ,yellow :weight bold))))
   `(mode-line-inactive
     ((t (:foreground ,green
                      :background ,background
                      :box (:line-width -1 :style released-button)))))
   `(region
     ((t (:foreground ,background
                      :background ,foreground))
      (t :inverse-video t)))
   `(secondary-selection ((t (:background ,background))))
   `(trailing-whitespace ((t (:background ,red))))
   `(vertical-border ((t (:foreground ,foreground))))

   ;; font lock
   `(font-lock-builtin-face ((t (:foreground ,foreground :weight bold))))
   `(font-lock-comment-face ((t (:foreground ,green))))
   `(font-lock-comment-delimiter-face ((t (:foreground ,green))))
   `(font-lock-constant-face ((t (:foreground ,green))))
   `(font-lock-doc-face ((t (:foreground ,green))))
   `(font-lock-function-name-face ((t (:foreground ,cyan))))
   `(font-lock-keyword-face ((t (:foreground ,yellow :weight bold))))
   `(font-lock-negation-char-face ((t (:foreground ,yellow :weight bold))))
   `(font-lock-preprocessor-face ((t (:foreground ,blue))))
   `(font-lock-regexp-grouping-construct ((t (:foreground ,yellow :weight bold))))
   `(font-lock-regexp-grouping-backslash ((t (:foreground ,green :weight bold))))
   `(font-lock-string-face ((t (:foreground ,red))))
   `(font-lock-type-face ((t (:foreground ,blue))))
   `(font-lock-variable-name-face ((t (:foreground ,cyan :weight bold))))
   `(font-lock-warning-face ((t (:foreground ,yellow :weight bold))))
   `(c-annotation-face ((t (:inherit font-lock-constant-face))))

   ;; Third-party

   ;; doom-modeline
   `(doom-modeline-bar ((t (:background ,cyan))))
   `(doom-modeline-bar-inactive ((t (:background ,background))))
   `(doom-modeline-urgent ((t (:foreground ,red :weight bold))))
   `(doom-modeline-buffer-modified ((t (:foreground ,yellow :background nil :weight bold))))

   `(treemacs-file-face
     ((t (:foreground "#FFF" :background nil :weight ultra-light))))

   `(treemacs-directory-face
     ((t (:foreground "#F00" :background nil :weight ultra-light))))
   `(treemacs-directory-collapsed-face
     ((t (:inherit treemacs-directory-face :weight ultra-light))))

   `(treemacs-fringe-indicator-face
     ((t (:foreground ,cyan :background ,cyan))))

   `(treemacs-tags-face
     ((t (:foreground ,green :background nil :weight normal :slant italic))))

   `(treemacs-git-added-face
     ((t (:foreground "#0F0"))))
   `(treemacs-git-conflict-face
     ((t (:foreground "#F00"))))
   `(treemacs-git-modified-face
     ((t (:foreground "#FF0"))))
   `(treemacs-git-ignored-face
     ((t (:foreground "#444"))))
   `(treemacs-git-untracked-face
     ((t (:inherit treemacs-file-face))))
   `(treemacs-git-unmodified-face
     ((t (:inherit treemacs-file-face))))

   ;; which-function-mode
   `(which-func ((t (:foreground ,blue))))

   ;; ace-jump
   `(ace-jump-face-background
     ((t (:foreground ,foreground :background ,background :inverse-video nil))))
   `(ace-jump-face-foreground
     ((t (:foreground ,green :background ,background :inverse-video nil))))

   ;; company-mode
   `(company-tooltip ((t (:foreground ,background :background ,foreground))))
   `(company-tooltip-selection ((t (:foreground ,background :background ,light-blue))))
   `(company-tooltip-common ((t (:foreground ,background :bold))))
   `(company-tooltip-common-selection ((t (:foreground ,background :bold))))
   `(company-scrollbar-fg ((t (:background ,light-green))))
   `(company-scrollbar-bg ((t (:background ,light-gray))))
   `(company-preview ((t (:background ,green))))
   `(company-preview-common ((t (:foreground ,green :background ,background))))

   ;; diff
   `(diff-added ((t (:foreground ,green :background nil))
                 (t (:foreground ,green :background nil))))
   `(diff-changed ((t (:foreground ,yellow))))
   `(diff-removed ((t (:foreground ,red :background nil))
                   (t (:foreground ,red :background nil))))
   `(diff-refine-added ((t (:inherit diff-added :weight bold))))
   `(diff-refine-change ((t (:inherit diff-changed :weight bold))))
   `(diff-refine-removed ((t (:inherit diff-removed :weight bold))))
   `(diff-header ((t (:background ,background))
                  (t (:background ,foreground :foreground ,background))))
   `(diff-file-header
     ((t (:background ,background :foreground ,foreground :bold t))
      (t (:background ,foreground :foreground ,background :bold t))))

   ;; diff-hl
   `(diff-hl-change ((t (:foreground ,blue :background ,background))))
   `(diff-hl-delete ((t (:foreground ,red :background ,background))))
   `(diff-hl-insert ((t (:foreground ,green :background ,background))))
   `(diff-hl-unknown ((t (:foreground ,yellow :background ,background))))

   ;; dired+
   `(diredp-display-msg ((t (:foreground ,blue))))
   `(diredp-compressed-file-suffix ((t (:foreground ,red))))
   `(diredp-date-time ((t (:foreground ,magenta))))
   `(diredp-deletion ((t (:foreground ,yellow))))
   `(diredp-deletion-file-name ((t (:foreground ,red))))
   `(diredp-dir-heading ((t (:foreground ,blue :background ,background))))
   `(diredp-dir-priv ((t (:foreground ,cyan))))
   `(diredp-exec-priv ((t (:foreground ,red))))
   `(diredp-executable-tag ((t (:foreground ,green))))
   `(diredp-file-name ((t (:foreground ,blue))))
   `(diredp-file-suffix ((t (:foreground ,green))))
   `(diredp-flag-mark ((t (:foreground ,yellow))))
   `(diredp-flag-mark-line ((t (:foreground ,red))))
   `(diredp-ignored-file-name ((t (:foreground ,red))))
   `(diredp-link-priv ((t (:foreground ,yellow))))
   `(diredp-mode-line-flagged ((t (:foreground ,yellow))))
   `(diredp-mode-line-marked ((t (:foreground ,red))))
   `(diredp-no-priv ((t (:foreground ,foreground))))
   `(diredp-number ((t (:foreground ,green))))
   `(diredp-other-priv ((t (:foreground ,yellow))))
   `(diredp-rare-priv ((t (:foreground ,red))))
   `(diredp-read-priv ((t (:foreground ,green))))
   `(diredp-symlink ((t (:foreground ,yellow))))
   `(diredp-write-priv ((t (:foreground ,magenta))))

   ;; ediff
   `(ediff-current-diff-A ((t (:foreground ,foreground :background ,red))))
   `(ediff-current-diff-Ancestor ((t (:foreground ,foreground :background ,red))))
   `(ediff-current-diff-B ((t (:foreground ,foreground :background ,green))))
   `(ediff-current-diff-C ((t (:foreground ,foreground :background ,blue))))
   `(ediff-even-diff-A ((t (:background ,background))))
   `(ediff-even-diff-Ancestor ((t (:background ,background))))
   `(ediff-even-diff-B ((t (:background ,background))))
   `(ediff-even-diff-C ((t (:background ,background))))
   `(ediff-fine-diff-A ((t (:foreground ,foreground :background ,red :weight bold))))
   `(ediff-fine-diff-Ancestor ((t (:foreground ,foreground :background ,red weight bold))))
   `(ediff-fine-diff-B ((t (:foreground ,foreground :background ,green :weight bold))))
   `(ediff-fine-diff-C ((t (:foreground ,foreground :background ,blue :weight bold ))))
   `(ediff-odd-diff-A ((t (:background ,background))))
   `(ediff-odd-diff-Ancestor ((t (:background ,background))))
   `(ediff-odd-diff-B ((t (:background ,background))))
   `(ediff-odd-diff-C ((t (:background ,background))))

   ;; erc
   `(erc-action-face ((t (:inherit erc-default-face))))
   `(erc-bold-face ((t (:weight bold))))
   `(erc-current-nick-face ((t (:foreground ,blue :weight bold))))
   `(erc-dangerous-host-face ((t (:inherit font-lock-warning-face))))
   `(erc-default-face ((t (:foreground ,foreground))))
   `(erc-direct-msg-face ((t (:inherit erc-default))))
   `(erc-error-face ((t (:inherit font-lock-warning-face))))
   `(erc-fool-face ((t (:inherit erc-default))))
   `(erc-highlight-face ((t (:inherit hover-highlight))))
   `(erc-input-face ((t (:foreground ,yellow))))
   `(erc-keyword-face ((t (:foreground ,blue :weight bold))))
   `(erc-nick-default-face ((t (:foreground ,yellow :weight bold))))
   `(erc-my-nick-face ((t (:foreground ,red :weight bold))))
   `(erc-nick-msg-face ((t (:inherit erc-default))))
   `(erc-notice-face ((t (:foreground ,green))))
   `(erc-pal-face ((t (:foreground ,red :weight bold))))
   `(erc-prompt-face ((t (:foreground ,red :background ,background :weight bold))))
   `(erc-timestamp-face ((t (:foreground ,green))))
   `(erc-underline-face ((t (:underline t))))

   ;; ert
   `(ert-test-result-expected ((t (:foreground ,green :background ,background))))
   `(ert-test-result-unexpected ((t (:foreground ,red :background ,background))))

   ;; eshell
   `(eshell-prompt ((t (:foreground ,yellow :weight bold))))
   `(eshell-ls-archive ((t (:foreground ,red :weight bold))))
   `(eshell-ls-backup ((t (:inherit font-lock-comment-face))))
   `(eshell-ls-clutter ((t (:inherit font-lock-comment-face))))
   `(eshell-ls-directory ((t (:foreground ,blue :weight bold))))
   `(eshell-ls-executable ((t (:foreground ,red :weight bold))))
   `(eshell-ls-unreadable ((t (:foreground ,foreground))))
   `(eshell-ls-missing ((t (:inherit font-lock-warning-face))))
   `(eshell-ls-product ((t (:inherit font-lock-doc-face))))
   `(eshell-ls-special ((t (:foreground ,yellow :weight bold))))
   `(eshell-ls-symlink ((t (:foreground ,cyan :weight bold))))

   ;; flycheck
   `(flycheck-error
     ((((supports :underline (:style wave)))
       (:underline (:style wave :color ,red) :inherit unspecified))
      (t (:foreground ,red :weight bold :underline t))))
   `(flycheck-warning
     ((((supports :underline (:style wave)))
       (:underline (:style wave :color ,yellow) :inherit unspecified))
      (t (:foreground ,yellow :weight bold :underline t))))
   `(flycheck-info
     ((((supports :underline (:style wave)))
       (:underline (:style wave :color ,cyan) :inherit unspecified))
      (t (:foreground ,cyan :weight bold :underline t))))
   `(flycheck-fringe-error ((t (:foreground ,red :weight bold))))
   `(flycheck-fringe-warning ((t (:foreground ,yellow :weight bold))))
   `(flycheck-fringe-info ((t (:foreground ,cyan :weight bold))))

   ;; git-rebase-mode
   `(git-rebase-hash ((t (:foreground ,red))))

   ;; helm
   `(helm-header
     ((t (:foreground ,green
                      :background ,background
                      :underline nil
                      :box nil))))
   `(helm-source-header
     ((t (:foreground ,yellow
                      :background ,background
                      :underline nil
                      :weight bold
                      :box (:line-width -1 :style released-button)))))
   `(helm-selection ((t :inverse-video t)))
   `(helm-selection-line ((t (:foreground ,background :background ,foreground))
                          (t :inverse-video t)))
   `(helm-visible-mark ((t (:foreground ,background :background ,yellow))))
   `(helm-candidate-number ((t (:foreground ,green :background ,background))))
   `(helm-separator ((t (:foreground ,red :background ,background))))
   `(helm-time-zone-current ((t (:foreground ,green :background ,background))))
   `(helm-time-zone-home ((t (:foreground ,red :background ,background))))
   `(helm-bookmark-addressbook ((t (:foreground ,red :background ,background))))
   `(helm-bookmark-directory ((t (:foreground nil :background nil :inherit helm-ff-directory))))
   `(helm-bookmark-file ((t (:foreground nil :background nil :inherit helm-ff-file))))
   `(helm-bookmark-gnus ((t (:foreground ,magenta :background ,background))))
   `(helm-bookmark-info ((t (:foreground ,green :background ,background))))
   `(helm-bookmark-man ((t (:foreground ,yellow :background ,background))))
   `(helm-bookmark-w3m ((t (:foreground ,magenta :background ,background))))
   `(helm-buffer-not-saved ((t (:foreground ,red :background ,background))))
   `(helm-buffer-process ((t (:foreground ,cyan :background ,background))))
   `(helm-buffer-saved-out ((t (:foreground ,foreground :background ,background))))
   `(helm-buffer-size ((t (:foreground ,foreground :background ,background))))
   `(helm-ff-directory ((t (:foreground ,cyan :background ,background :weight bold))))
   `(helm-ff-dotted-directory ((t (:foreground ,cyan :background ,background :weight bold))))
   `(helm-ff-dotted-symlink-directory ((t (:foreground ,cyan :background ,background :weight bold))))
   `(helm-ff-file ((t (:foreground ,foreground :background ,background :weight normal))))
   `(helm-ff-executable ((t (:foreground ,green :background ,background :weight normal))))
   `(helm-ff-invalid-symlink ((t (:foreground ,red :background ,background :weight bold))))
   `(helm-ff-symlink ((t (:foreground ,yellow :background ,background :weight bold))))
   `(helm-ff-prefix ((t (:foreground ,background :background ,yellow :weight normal))))
   `(helm-grep-cmd-line ((t (:foreground ,cyan :background ,background))))
   `(helm-grep-file ((t (:foreground ,foreground :background ,background))))
   `(helm-grep-finish ((t (:foreground ,green :background ,background))))
   `(helm-grep-lineno ((t (:foreground ,foreground :background ,background))))
   `(helm-grep-match ((t (:foreground nil :background nil :inherit helm-match))))
   `(helm-grep-running ((t (:foreground ,red :background ,background))))
   `(helm-moccur-buffer ((t (:foreground ,cyan :background ,background))))
   `(helm-mu-contacts-address-face ((t (:foreground ,foreground :background ,background))))
   `(helm-mu-contacts-name-face ((t (:foreground ,foreground :background ,background))))

   ;; hl-line-mode
   `(hl-line-face ((t (:background ,background))
                   (t :weight bold)))
   `(hl-line ((t (:background ,background)) ; old emacsen
              (t :weight bold)))

   ;; ido-mode
   `(ido-first-match ((t (:foreground ,yellow :weight bold))))
   `(ido-only-match ((t (:foreground ,red :weight bold))))
   `(ido-subdir ((t (:foreground ,yellow))))
   `(ido-indicator ((t (:foreground ,yellow :background ,red))))

   ;; js2-mode
   `(js2-warning ((t (:underline ,red))))
   `(js2-error ((t (:foreground ,red :weight bold))))
   `(js2-jsdoc-tag ((t (:foreground ,green))))
   `(js2-jsdoc-type ((t (:foreground ,green))))
   `(js2-jsdoc-value ((t (:foreground ,green))))
   `(js2-function-param ((t (:foreground ,green))))
   `(js2-external-variable ((t (:foreground ,red))))

   ;; linum-mode
   `(linum ((t (:foreground ,green :background ,background))))

   ;; magit
   `(magit-item-highlight ((t (:background ,background))))
   `(magit-section-title ((t (:foreground ,yellow :weight bold))))
   `(magit-process-ok ((t (:foreground ,green :weight bold))))
   `(magit-process-ng ((t (:foreground ,red :weight bold))))
   `(magit-branch ((t (:foreground ,blue :weight bold))))
   `(magit-log-author ((t (:foreground ,red))))
   `(magit-log-sha1 ((t (:foreground ,red))))

   ;; org-mode
   `(org-agenda-date-today
     ((t (:foreground ,foreground :slant italic :weight bold))) t)
   `(org-agenda-structure
     ((t (:inherit font-lock-comment-face :inherit default :height 2.0 :underline nil))))
   `(org-archived ((t (:foreground ,foreground :weight bold))))
   `(org-block
     ((t (:background ,(scale-both background 1.2 0.5)
                      :box nil :height 0.8 :family "Menlo"))))
   `(org-block-begin-line
     ((t (:height 0.6 :family "Menlo"))))
   `(org-block-end-line
     ((t (:height 0.6 :family "Menlo"))))
   `(org-checkbox
     ((t (:background ,background :foreground ,foreground :box (:color "#93a1a1" :style "released-button")))))
   `(org-date ((t (:foreground ,blue :underline t))))
   `(org-deadline-announce ((t (:foreground ,red))))
   `(org-document-title
     ((t (:inherit org-level-1 :height 2.0 :underline nil :box nil))))
   `(org-document-info-keyword
     ((t (:inherit default :height 0.8 :foreground "#AA7777"))))
   `(org-done
     ((t (:bold t :weight bold :foreground ,green :strike-through nil))))
   `(org-formula ((t (:foreground ,yellow))))
   `(org-headline-done ((t (:foreground ,green))))
   `(org-hide ((t (:foreground ,background))))
   `(org-level-1 ((t (:foreground ,red :height 1.5 :box (:color ,background :line-width 5)))))
   `(org-level-2 ((t (:foreground ,green :height 1.25 :box (:color ,background :line-width 5)))))
   `(org-level-3 ((t (:foreground ,blue :box (:color ,background :line-width 5)))))
   `(org-level-4 ((t (:foreground ,yellow :box (:color ,background :line-width 3)))))
   `(org-level-5 ((t (:foreground ,cyan :box (:color ,background :line-width 2)))))
   `(org-level-6 ((t (:foreground ,green :box nil))))
   `(org-level-7 ((t (:foreground ,red :box nil))))
   `(org-level-8 ((t (:foreground ,blue :box nil))))
   `(org-link ((t (:foreground ,yellow :underline t))))
   `(org-list-dt ((t (:inherit default :height 2.0))))
   `(org-meta-line ((t (:slant italic :height 0.9 :foreground "#777777"))))
   `(org-scheduled ((t (:foreground ,green))))
   `(org-scheduled-previously ((t (:foreground ,red))))
   `(org-scheduled-today ((t (:foreground ,blue))))
   `(org-sexp-date ((t (:foreground ,blue :underline t))))
   `(org-special-keyword ((t (:inherit font-lock-comment-face))))
   `(org-table ((t (:foreground ,green))))
   `(org-tag ((t (:bold t :weight bold))))
   `(org-time-grid ((t (:foreground ,red))))
   `(org-todo ((t (:bold t :foreground ,red :weight bold))))
   `(org-upcoming-deadline ((t (:inherit font-lock-keyword-face))))
   `(org-warning ((t (:bold t :foreground ,red :weight bold :underline nil))))
   `(org-column ((t (:background ,background))))
   `(org-column-title ((t (:background ,background :underline t :weight bold))))
   `(org-mode-line-clock ((t (:foreground ,foreground :background ,background))))
   `(org-mode-line-clock-overrun ((t (:foreground ,background :background ,red))))
   `(org-ellipsis
     ((t (:foreground ,yellow :underline t :inherit org-level-faces :underline nil))))
   `(org-footnote ((t (:foreground ,cyan :underline t))))
   `(org-quote ((t (:slant italic :height 1.1))))

   ;; outline
   `(outline-1 ((t (:foreground ,red))))
   `(outline-2 ((t (:foreground ,green))))
   `(outline-3 ((t (:foreground ,blue))))
   `(outline-4 ((t (:foreground ,yellow))))
   `(outline-5 ((t (:foreground ,cyan))))
   `(outline-6 ((t (:foreground ,green))))
   `(outline-7 ((t (:foreground ,red))))
   `(outline-8 ((t (:foreground ,blue))))

   ;; powerline
   `(powerline-active1 ((t (:background ,background :inherit mode-line))))
   `(powerline-active2 ((t (:background ,background :inherit mode-line))))
   `(powerline-inactive1 ((t (:background ,background :inherit mode-line-inactive))))
   `(powerline-inactive2 ((t (:background ,background :inherit mode-line-inactive))))

   ;; rainbow-delimiters
   `(rainbow-delimiters-depth-1-face ((t (:foreground ,foreground))))
   `(rainbow-delimiters-depth-2-face ((t (:foreground ,green))))
   `(rainbow-delimiters-depth-3-face ((t (:foreground ,yellow))))
   `(rainbow-delimiters-depth-4-face ((t (:foreground ,cyan))))
   `(rainbow-delimiters-depth-5-face ((t (:foreground ,green))))
   `(rainbow-delimiters-depth-6-face ((t (:foreground ,blue))))
   `(rainbow-delimiters-depth-7-face ((t (:foreground ,yellow))))
   `(rainbow-delimiters-depth-8-face ((t (:foreground ,green))))
   `(rainbow-delimiters-depth-9-face ((t (:foreground ,blue))))

   ;; sh-mode
   `(sh-heredoc     ((t (:foreground ,yellow :bold t))))
   `(sh-quoted-exec ((t (:foreground ,red))))

   ;; smartparens
   `(sp-show-pair-mismatch-face ((t (:foreground ,red :background ,background :weight bold))))
   `(sp-show-pair-match-face ((t (:background ,background :weight bold))))))

;;;###autoload
(when load-file-name
  (add-to-list 'custom-theme-load-path
               (file-name-as-directory
                (file-name-directory load-file-name))))

(provide-theme 'xresources)

;;; xresources-theme.el ends here
