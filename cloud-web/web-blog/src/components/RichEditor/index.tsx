/**
 * 
 * slate -这是slate的核心资料库
  slate-react -石板的用户界面库
  immutable -对等依赖项用于其文档模型
  slate-plain-serializer -这个库让我们将字符串转换为文档模型
 * 
 * 
 */

// Import React dependencies.
import React, { useMemo, useState } from "react";
// Import the Slate editor factory.
import { createEditor, Node } from 'slate'
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

const initialVal: Node[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

interface RichEditorProps { }

const RichEditor: React.FC<RichEditorProps> = () => {

  const editor = useMemo(() => withReact(createEditor()), [])
  // Add the initial value when setting up our state.
  const [value, setValue] = useState(initialVal)

  const handleChange = (value: Node[]) => {
    console.log(value);
    setValue(value);
  }

  return (
    <Slate editor={editor} value={value} onChange={handleChange}>
      <Editable
        onKeyDown={event => {
          // console.log(event);
          if (event.key === '&') {
            event.preventDefault()
            editor.insertText("and")
          }
        }}
      />
    </Slate>
  )

}

export default RichEditor;