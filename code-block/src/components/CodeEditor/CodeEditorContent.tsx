import { z } from 'zod'

// TODO use 0, -, +
export const lineStates = ['default', 'neutral', 'add', 'remove'] as const

const CodeEditorContentSchema = z.object({
  code: z.string(),
  highlightedLines: z.array(z.enum(lineStates)),
})

export type CodeEditorContent = z.infer<typeof CodeEditorContentSchema>

export const parseCodeEditorState = (data: unknown): CodeEditorContent => {
  if(data !== ""){
    return data
  } else {
    return {
      code: '',
      highlightedLines: [],
    }
  }
  // const content = CodeEditorContentSchema.safeParse(data)
  // if (content.success) {
  //   return content.data
  // } else {
  //   return {
  //     code: '',
  //     highlightedLines: [],
  //   }
  // }
}

export type LineState = CodeEditorContent['highlightedLines'][number]
