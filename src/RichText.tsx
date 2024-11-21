import { Component, ReactNode, createElement } from "react";
import MyRichText from "./components/MyRichText";

import { RichTextContainerProps } from "../typings/RichTextProps";

import "./ui/RichText.css";

export class RichText extends Component<RichTextContainerProps> {
    render(): ReactNode {
        return <MyRichText 
        richTextVal={this.props.richTextVal}
        lang={this.props.lang}
        height={this.props.height}
        readOnly={this.props.readOnly}
         />;
    }
}
