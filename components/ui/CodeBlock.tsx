import { codeToHtml } from 'shiki'
import { CodeBlockCopyButton } from '@/components/ui/CodeBlockCopyButton'

interface CodeBlockProps {
  language?: string
  children: string
  filename?: string
}

function normalizeCode(value: string) {
  return value.replace(/^\n/, '').replace(/\n$/, '')
}

export async function CodeBlock({
  language = 'tsx',
  children,
  filename,
}: CodeBlockProps) {
  const code = normalizeCode(children)

  const html = await codeToHtml(code, {
    lang: language,
    theme: 'one-dark-pro',
  })

  const displayLanguage = filename ?? language

  return (
    <figure className="code-block" data-language={language}>
      <div className="code-block__toolbar">
        <span className="code-block__language">{displayLanguage}</span>
        <CodeBlockCopyButton code={code} />
      </div>
      <div
        className="code-block__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </figure>
  )
}
