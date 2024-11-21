import { createElement, useState, useEffect } from "react";
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig, i18nChangeLanguage } from '@wangeditor/editor'
import { EditableValue } from "mendix";

export interface MyRichTextProps {
    richTextVal: EditableValue<string>;
    lang: string;
    readOnly: boolean;
    height: number | null;
}

const MyRichText: React.FC<MyRichTextProps> = (props) => {
    if (props?.richTextVal?.status !== "available"){
        return <div></div>;
    }
    console.info('porps=', props)
    // 切换语言 - 'en' 或者 'zh-CN'
    const { lang, readOnly, height, richTextVal } = props;
    i18nChangeLanguage(lang === 'en' ? lang : 'zh-CN');
    // editor 实例
    const [editor, setEditor] = useState<IDomEditor | null>(null)   // TS 语法
    // const [editor, setEditor] = useState(null)                   // JS 语法

    // 编辑器内容
    const [html, setHtml] = useState('')
    // 模拟 ajax 请求，异步设置 html
    useEffect(() => {
        setHtml(richTextVal?.value || "")
    }, [richTextVal])
    // 工具栏配置
    const toolbarConfig: Partial<IToolbarConfig> = {}  // TS 语法
    // const toolbarConfig = { }                        // JS 语法
    // 过滤菜单
    toolbarConfig.excludeKeys = [
        "uploadVideo",
        "uploadImage"
    ]
    // 编辑器配置
    const editorConfig: Partial<IEditorConfig> = {    // TS 语法
        // const editorConfig = {                         // JS 语法
        placeholder: lang !== 'en' ? '请输入内容...' : 'Please enter content...',
        // 只读模式
        readOnly: readOnly
    }

    // 及时销毁 editor ，重要！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    // const toolbar = DomEditor.getToolbar(editor as IDomEditor)
    // const curToolbarConfig = toolbar?.getConfig()
    // console.log('tollbarkeys=', curToolbarConfig?.toolbarKeys) // 当前菜单排序和分组
    // console.log('editor.getAllMenuKeys()=', editor?.getAllMenuKeys())
    return (
        <div>
            <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <Editor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={editor => richTextVal.setValue(editor.getHtml())}
                    mode="default"
                    style={{ height: ((height && height > 100) ? height : 500) + 'px', overflowY: 'hidden' }}
                />
            </div>
            {/* <div style={{ marginTop: '15px' }}>
        {html}
      </div> */}
        </div>
    )
}

export default MyRichText;
