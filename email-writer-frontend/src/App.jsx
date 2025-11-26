import { useState } from 'react'
import './App.css'

function App() {
  const [emailContent, setEmailContent] = useState('')
  const [tone, setTone] = useState('professional')
  const [generatedReply, setGeneratedReply] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const handleGenerate = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setGeneratedReply('')
    setCopied(false)

    if (!emailContent.trim()) {
      setError('Please paste the original email content.')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('http://localhost:8080/api/email/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailContent,
          tone,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate reply. Please try again.')
      }

      const text = await response.text()
      setGeneratedReply(text)
    } catch (err) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = async () => {
    if (!generatedReply) return
    try {
      await navigator.clipboard.writeText(generatedReply)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      setError('Could not copy to clipboard. Please copy manually.')
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Email Reply Generator</h1>
        <p>Paste an email, choose a tone, and instantly get a polished reply.</p>
      </header>

      <main className="app-main">
        <form className="card" onSubmit={handleGenerate}>
          <div className="form-group">
            <label htmlFor="emailContent">Original Email Content</label>
            <textarea
              id="emailContent"
              placeholder="Paste the email you want to reply to..."
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              rows={8}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tone">Tone</label>
              <select
                id="tone"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
              >
                <option value="casual">Casual</option>
                <option value="friendly">Friendly</option>
                <option value="professional">Professional</option>
                <option value="formal">Formal</option>
                <option value="concise">Concise</option>
              </select>
            </div>

            <div className="form-actions">
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Generating...' : 'Generate Reply'}
              </button>
            </div>
          </div>

          {error && <p className="error-text">{error}</p>}
        </form>

        {generatedReply && (
          <section className="card reply-section">
            <div className="reply-header">
              <h2>Generated Reply</h2>
              <button onClick={handleCopy}>
                {copied ? 'Copied!' : 'Copy to Clipboard'}
              </button>
            </div>
            <textarea
              className="reply-textarea"
              readOnly
              value={generatedReply}
              rows={8}
            />
          </section>
        )}
      </main>
    </div>
  )
}

export default App
