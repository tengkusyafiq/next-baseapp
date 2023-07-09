"use client"

import editorjsNestedChecklist from '@calumk/editorjs-nested-checklist';
import CheckList from "@editorjs/checklist"
import Code from "@editorjs/code"
import Delimiter from "@editorjs/delimiter"
import Embed from "@editorjs/embed"
import InlineCode from "@editorjs/inline-code"
import LinkTool from "@editorjs/link"
import List from "@editorjs/list"
import Marker from "@editorjs/marker"
import Quote from "@editorjs/quote"
import Raw from "@editorjs/raw"
import SimpleImage from "@editorjs/simple-image"
import Table from "@editorjs/table"
// import Image from '@editorjs/image'
import Alert from "editorjs-alert"
import Header from "editorjs-header-with-alignment"
// import InlineTools from "editorjs-inline-tool"
 import Paragraph from "editorjs-paragraph-with-alignment"
import ColorPlugin from 'editorjs-text-color-plugin';
// import ToggleBlock from 'editorjs-toggle-block';
// import AttachesTool from '@editorjs/attaches';

export const EDITOR_TOOLS = {
  header: {
    class: Header,
    inlineToolbar: ["link"],
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  embed: Embed,
  table: Table,
  // warning: Warning,
  code: Code,
  link: LinkTool,
  //   image: Image, // TODO: need backend to store image
  raw: Raw,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  SimpleImage: SimpleImage,
  alert: Alert,
  // inlineTools: InlineTools,
  // toggleBlock: ToggleBlock, // not stable, trigger error.
  color: ColorPlugin,
  //   attaches: {
  //     class: AttachesTool,
  //     config: {
  //       endpoint: 'http://localhost:8008/uploadFile'
  //     }
  //   }
  nestedchecklist : editorjsNestedChecklist,

}
