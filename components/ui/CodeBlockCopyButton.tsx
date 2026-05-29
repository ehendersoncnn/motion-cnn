'use client'

import { useState } from 'react'

interface CodeBlockCopyButtonProps {
  code: string
}

export function CodeBlockCopyButton({ code }: CodeBlockCopyButtonProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? 'Copied to clipboard' : 'Copy code to clipboard'}
      className="code-block__copy"
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}
