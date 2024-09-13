import { posToDOMRect, useCurrentEditor, BubbleMenu } from "@tiptap/react";
import { Icon } from '@/components/ui/Icon';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SelectionContext } from "@/types";

import { Popup } from "./Popup";
import { Suggestions } from "./Suggestions";
import { AIDropdown } from "../AIDropdown";
import { useTextmenuCommands } from "../useTextmenuCommands";
import { Toolbar } from "../ui/Toolbar";
import { Surface } from "../ui/Surface";
// import { Suggestions } from "./Suggestions";

interface MenuProps {
  suggestions: string[];
  context: SelectionContext | null;
  status: "idle" | "fetching" | "done";
}

export const Menu = ({ suggestions, context, status }: MenuProps) => {
  const { editor } = useCurrentEditor();

  const lastRect = React.useRef<DOMRect | null>(null);
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const [openCustomePromt, setOpenCustomePromt] = useState<boolean>(false);
  const rect = React.useMemo(() => {
    if (!editor || status === "done") {
      return lastRect.current;
    }

    const rect = posToDOMRect(
      editor.view,
      editor.state.selection.from,
      editor.state.selection.to,
    );

    const editorRect = editor.view.dom.getBoundingClientRect();

    rect.y -= editorRect.y;
    rect.x -= editorRect.x;

    lastRect.current = rect;

    return rect;
  }, [
    status,
    editor?.view,
    editor?.state.selection.from,
    editor?.state.selection.to,
  ]);

  if (!editor || editor.isDestroyed) {
    return null;
  }
  console.log('[status]', status);
  console.log('[popupOpen]', popupOpen);
  const commands = useTextmenuCommands(editor)
  const openCustomePromtHandler = () => {
    setOpenCustomePromt(true)
  }
  return (
    // <Popup rect={rect} visible={status !== "idle"}>
    //   <div className="flex flex-col gap-2">
    //     <motion.div 
    //       className="flex flex-row items-center gap-1 text-violet-500 cursor-pointer" 
    //       onClick={() => setPopupOpen(true)}
    //     >
    //       <SparklesIcon className="w-4 h-4" />
    //       <p className="text-sm font-semibold">AI Tools</p>
    //     </motion.div>
    //     <Suggestions
    //       isLoading={status === "fetching" || status === "idle"}
    //       suggestions={suggestions}
    //       context={context}
    //     />
    //   </div>
    // </Popup>
    // <Popup rect={rect} visible={status !== "idle"}>
    //    <AIDropdown 
    //    onCompleteSentence={commands.onCompleteSentence}
    //    onEmojify={commands.onEmojify}
    //    onFixSpelling={commands.onFixSpelling}
    //    onMakeLonger={commands.onMakeLonger}
    //    onMakeShorter={commands.onMakeShorter}
    //    onSimplify={commands.onSimplify}
    //    onTldr={commands.onTldr}
    //    onTone={commands.onTone}
    //    />
    // </Popup>
    <BubbleMenu
      tippyOptions={{ popperOptions: { placement: 'top-start' }, animation: 'fade' }}
      editor={editor}
      pluginKey="textMenu"
      updateDelay={100}
    >
     <AIDropdown 
      onCompleteSentence={commands.onCompleteSentence}
      onEmojify={commands.onEmojify}
      onFixSpelling={commands.onFixSpelling}
      onMakeLonger={commands.onMakeLonger}
      onMakeShorter={commands.onMakeShorter}
      onSimplify={commands.onSimplify}
      onTldr={commands.onTldr}
      openCustomePromtHandler={openCustomePromtHandler}
      openCustomePromt={openCustomePromt}
     />
    </BubbleMenu>
  );
};
