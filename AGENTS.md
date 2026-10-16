<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Use TanStack file routes for PATIPS sections and shared navigation; each section remains directly addressable.
- Keep proposal catalog values in one browser-safe data module so catalog rendering and checks share the same source.
- Keep inquiries local and downloadable without remote submission because this is an offline academic demonstration.
- Export rendered pages with local assets and a small offline interaction script for no-install Windows presentations.
- Preserve the supplied security policy in browser-safe structured content and expose its original document through an asset pointer, so the readable page and source remain available without remote submission.
