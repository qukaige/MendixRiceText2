/**
 * This file was generated from RichText.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export type LangEnum = "cn" | "en";

export interface RichTextContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    richTextVal: EditableValue<string>;
    lang: LangEnum;
    readOnly: boolean;
    height: number;
}

export interface RichTextPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    richTextVal: string;
    lang: LangEnum;
    readOnly: boolean;
    height: number | null;
}
