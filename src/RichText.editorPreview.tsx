import { Component, ReactNode, createElement } from "react";
import MyRichTextPreview from "./components/MyRichTextPreview";
import { RichTextPreviewProps } from "../typings/RichTextProps";

export class preview extends Component<RichTextPreviewProps> {
    render(): ReactNode {
        return <MyRichTextPreview 
        richTextVal={this.props.richTextVal}
        lang={this.props.lang}
        height={this.props.height}
        readOnly={this.props.readOnly}
         />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/RichText.css");
}
