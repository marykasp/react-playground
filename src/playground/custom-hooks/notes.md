Updated Styled Files (Tailwind Version)

Replace your docs components with the versions below.

📄 HookDocsApp.jsx (no major changes)
import { useState } from "react"
import { hooksData } from "./hooksData"
import { DocsLayout } from "./components/DocsLayout"

export default function HookDocsApp() {
const [selectedId, setSelectedId] = useState(hooksData[0].id)

const selectedHook = hooksData.find((hook) => hook.id === selectedId)

return (
<DocsLayout
      hooks={hooksData}
      selectedHook={selectedHook}
      selectedId={selectedId}
      onSelect={setSelectedId}
    />
)
}
What is this?
📄 DocsLayout.jsx
import { Sidebar } from "./Sidebar"
import { HookPage } from "./HookPage"

export function DocsLayout({
hooks,
selectedHook,
selectedId,
onSelect
}) {
return (

<div className="flex h-full bg-white text-gray-900">
<Sidebar
        hooks={hooks}
        selectedId={selectedId}
        onSelect={onSelect}
      />
<main className="flex-1 overflow-y-auto px-10 py-12">
<div className="max-w-3xl mx-auto">
<HookPage hook={selectedHook} />
</div>
</main>
</div>
)
}
📄 Sidebar.jsx
export function Sidebar({ hooks, selectedId, onSelect }) {
return (
<aside className="w-64 border-r border-gray-200 bg-gray-50 px-6 py-8">
<h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
Custom Hooks
</h2>

      <nav className="space-y-1">
        {hooks.map((hook) => {
          const isActive = hook.id === selectedId

          return (
            <button
              key={hook.id}
              onClick={() => onSelect(hook.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition ${
                isActive
                  ? "bg-gray-200 font-medium text-gray-900"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {hook.name}
            </button>
          )
        })}
      </nav>
    </aside>

)
}

Now we have:

Active highlight

Proper spacing

Real docs sidebar feel

📄 HookPage.jsx
import { DemoPreview } from "./DemoPreview"

export function HookPage({ hook }) {
if (!hook) return null

const DemoComponent = hook.demo

return (

<article className="prose prose-gray max-w-none">
<h1 className="text-3xl font-bold mb-4">{hook.name}</h1>

      <p className="text-gray-700">{hook.description}</p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Parameters</h2>
        <div className="mt-4 space-y-3">
          {hook.parameters.map((param) => (
            <div key={param.name}>
              <p className="font-mono text-sm">
                {param.name}
                <span className="text-gray-500 ml-2">
                  {param.type}
                </span>
              </p>
              <p className="text-gray-600 text-sm">
                {param.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Returns</h2>
        <div className="mt-4 space-y-3">
          {hook.returns.map((ret) => (
            <div key={ret.name}>
              <p className="font-mono text-sm">
                {ret.name}
                <span className="text-gray-500 ml-2">
                  {ret.type}
                </span>
              </p>
              <p className="text-gray-600 text-sm">
                {ret.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Example</h2>

        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{hook.example}</code>
        </pre>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Live Demo</h2>
        <DemoPreview>
          <DemoComponent />
        </DemoPreview>
      </section>
    </article>

)
}

We added:

Real documentation typography

Clean code block styling

Clear content hierarchy

Controlled spacing

📄 DemoPreview.jsx
import { useToggle } from "../../hooks"

export function DemoPreview({ children }) {
return (

<div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
{children}
</div>
)
}

export function ToggleDemo() {
const [isOpen, toggle] = useToggle(false)

return (
<button
      onClick={toggle}
      className="px-4 py-2 bg-black text-white rounded-md hover:opacity-80 transition"
    >
{isOpen ? "Open: true" : "Open: false"}
</button>
)
}

Now the demo feels modern and intentional.

🧠 What This Now Demonstrates

This is no longer a playground.

It demonstrates:

Information architecture

Reusable layout design

Scalable documentation UI

Developer-focused design thinking

Tailwind system usage

Clean hierarchy and whitespace control

This looks like internal tooling.

Recruiters notice that.

🔥 Optional Next Upgrades

If you want to push it further:

Add sticky sidebar

Add search input

Add hook category grouping

Add dark mode toggle

Add copy-to-clipboard for code blocks

Add “complexity” badge per hook
