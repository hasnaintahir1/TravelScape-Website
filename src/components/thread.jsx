"use client";

import {
 ComposerAddAttachment,
 ComposerAttachments,
 UserMessageAttachments,
} from "@/components/attachment";
import { ThreadFollowupSuggestions } from "@/components/follow-up-suggestions";
import { MarkdownText } from "@/components/markdown-text";
import {
 Reasoning,
 ReasoningContent,
 ReasoningRoot,
 ReasoningText,
 ReasoningTrigger,
} from "@/components/reasoning";
import { ToolFallback } from "@/components/tool-fallback";
import {
 ToolGroupContent,
 ToolGroupRoot,
 ToolGroupTrigger,
} from "@/components/tool-group";
import { TooltipIconButton } from "@/components/tooltip-icon-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
 ActionBarMorePrimitive,
 ActionBarPrimitive,
 AuiIf,
 BranchPickerPrimitive,
 ComposerPrimitive,
 ErrorPrimitive,
 groupPartByType,
 MessagePrimitive,
 SuggestionPrimitive,
 ThreadPrimitive,
 useAuiState,
} from "@assistant-ui/react";
import {
 ArrowDownIcon,
 ArrowUpIcon,
 CheckIcon,
 ChevronLeftIcon,
 ChevronRightIcon,
 CopyIcon,
 DownloadIcon,
 MicIcon,
 MoreHorizontalIcon,
 PencilIcon,
 RefreshCwIcon,
 SquareIcon,
} from "lucide-react";
import { createContext, useContext } from "react";

const EMPTY_COMPONENTS = {};

const ThreadComponentsContext = createContext(EMPTY_COMPONENTS);

const isNewChatView = (s) => s.thread.messages.length === 0;

export const Thread = ({ components = EMPTY_COMPONENTS }) => {
 return (
   <ThreadComponentsContext.Provider value={components}>
     <ThreadRoot />
   </ThreadComponentsContext.Provider>
 );
};

const ThreadRoot = () => {
 const { Welcome = ThreadWelcome } = useContext(ThreadComponentsContext);

 return (
   <ThreadPrimitive.Root
     className="aui-root aui-thread-root bg-[rgb(235,229,217)] flex h-full w-full flex-col overflow-hidden relative"
     style={{
       ["--thread-max-width"]: "46rem",
     }}
   >
     {/* Messages Scrollable Area */}
     <ThreadPrimitive.Viewport
       turnAnchor="top"
       data-slot="aui_thread-viewport"
       className="relative flex min-h-0 flex-1 w-full flex-col items-center overflow-x-hidden overflow-y-auto scroll-smooth overscroll-contain"
     >
       <div className="mx-auto flex w-full max-w-(--thread-max-width) flex-1 flex-col items-center px-4 pt-6 pb-36">
         <AuiIf condition={isNewChatView}>
           <div className="flex w-full flex-1 flex-col items-center justify-center my-auto py-12">
             <Welcome />
           </div>
         </AuiIf>

         <div
           data-slot="aui_message-group"
           className="flex w-full flex-col gap-y-6 empty:hidden my-auto"
         >
           <ThreadPrimitive.Messages>
             {() => <ThreadMessage />}
           </ThreadPrimitive.Messages>
         </div>
       </div>
     </ThreadPrimitive.Viewport>

     {/* Floating Bottom Input Section - Forced 40px lift from screen bottom */}
     <div
       className="w-full shrink-0 flex flex-col items-center justify-center bg-gradient-to-t from-[rgb(235,229,217)] via-[rgb(235,229,217)]/95 to-transparent pt-3 px-4 sm:px-6 z-30"
       style={{
         position: "relative",
         marginBottom: "40px",
         paddingBottom: "16px"
       }}
     >
       <div className="flex w-full max-w-(--thread-max-width) flex-col items-center justify-center gap-2 relative">
         <ThreadScrollToBottom />
         <ThreadFollowupSuggestions />
         <Composer />
         <AuiIf condition={(s) => isNewChatView(s) && s.composer.isEmpty}>
           <ThreadSuggestions />
         </AuiIf>
       </div>
     </div>
   </ThreadPrimitive.Root>
 );
};

const ThreadMessage = () => {
 const { AssistantMessage: AssistantMessageComponent = AssistantMessage } =
   useContext(ThreadComponentsContext);
 const role = useAuiState((s) => s.message.role);
 const isEditing = useAuiState((s) => s.message.composer.isEditing);

 if (isEditing) return <EditComposer />;
 if (role === "user") return <UserMessage />;
 return <AssistantMessageComponent />;
};

const ThreadScrollToBottom = () => {
 return (
   <ThreadPrimitive.ScrollToBottom
     render={
       <TooltipIconButton
         tooltip="Scroll to bottom"
         variant="outline"
         className="aui-thread-scroll-to-bottom bg-background border-border/40 absolute -top-12 left-1/2 -translate-x-1/2 rounded-full p-2.5 shadow-md disabled:invisible z-20"
       />
     }
   >
     <ArrowDownIcon className="size-4" />
   </ThreadPrimitive.ScrollToBottom>
 );
};

const ThreadWelcome = () => {
 return (
   <div className="aui-thread-welcome-root mb-2 flex flex-col items-center justify-center text-center px-4 w-full">
     <h1 className="aui-thread-welcome-message-inner text-3xl sm:text-4xl font-normal tracking-tight text-neutral-800 text-center font-sans">
       How can I help you today?
     </h1>
   </div>
 );
};

const ThreadSuggestions = () => {
 return (
   <div className="aui-thread-welcome-suggestions flex w-full flex-wrap items-center justify-center gap-2 pt-2 px-1">
     <ThreadPrimitive.Suggestions>
       {() => <ThreadSuggestionItem />}
     </ThreadPrimitive.Suggestions>
   </div>
 );
};

const ThreadSuggestionItem = () => {
 return (
   <div className="aui-thread-welcome-suggestion-display">
     <SuggestionPrimitive.Trigger
       send
       render={
         <Button
           variant="ghost"
           className="aui-thread-welcome-suggestion text-neutral-700 hover:bg-neutral-800/10 bg-black/5 border-neutral-300/60 h-auto gap-1.5 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium whitespace-nowrap transition-all shadow-xs"
         />
       }
     >
       <SuggestionPrimitive.Title className="aui-thread-welcome-suggestion-text-1" />
       <SuggestionPrimitive.Description className="aui-thread-welcome-suggestion-text-2 empty:hidden" />
     </SuggestionPrimitive.Trigger>
   </div>
 );
};

const Composer = () => {
 return (
   <ComposerPrimitive.Root className="aui-composer-root relative flex w-full flex-col items-center justify-center">
     <ComposerPrimitive.AttachmentDropzone
       render={
         <div
           data-slot="aui_composer-shell"
           className="border-neutral-300/80 focus-within:border-neutral-400 focus-within:ring-2 focus-within:ring-black/5 flex w-full flex-col gap-1 rounded-2xl sm:rounded-3xl border bg-white p-2.5 px-3.5 sm:px-4 shadow-lg transition-all duration-200"
         />
       }
     >
       <ComposerAttachments />
       <ComposerPrimitive.Input
         placeholder="Send a message..."
         className="aui-composer-input text-neutral-800 caret-black placeholder:text-neutral-400 max-h-32 min-h-[44px] w-full resize-none bg-transparent px-2 py-2 text-sm sm:text-base outline-none leading-relaxed"
         rows={1}
         autoFocus
         enterKeyHint="send"
         aria-label="Message input"
       />
       <ComposerAction />
     </ComposerPrimitive.AttachmentDropzone>
   </ComposerPrimitive.Root>
 );
};

const ComposerAction = () => {
 return (
   <div className="aui-composer-action-wrapper flex items-center justify-between w-full px-1 sm:px-2 pb-0.5">
     <ComposerAddAttachment />
     <div className="flex items-center gap-1.5">
       <AuiIf condition={(s) => s.thread.capabilities.dictation}>
         <AuiIf condition={(s) => s.composer.dictation == null}>
           <ComposerPrimitive.Dictate
             render={
               <TooltipIconButton
                 tooltip="Voice input"
                 side="top"
                 type="button"
                 variant="ghost"
                 size="icon"
                 className="aui-composer-dictate size-8 rounded-full hover:bg-neutral-200/60 text-neutral-600"
                 aria-label="Start voice input"
               />
             }
           >
             <MicIcon className="aui-composer-dictate-icon size-4" />
           </ComposerPrimitive.Dictate>
         </AuiIf>
         <AuiIf condition={(s) => s.composer.dictation != null}>
           <ComposerPrimitive.StopDictation
             render={
               <TooltipIconButton
                 tooltip="Stop dictation"
                 side="top"
                 type="button"
                 variant="ghost"
                 size="icon"
                 className="aui-composer-stop-dictation text-destructive size-8 rounded-full hover:bg-destructive/10"
                 aria-label="Stop voice input"
               />
             }
           >
             <SquareIcon className="aui-composer-stop-dictation-icon size-3.5 animate-pulse fill-current" />
           </ComposerPrimitive.StopDictation>
         </AuiIf>
       </AuiIf>

       <AuiIf condition={(s) => !s.thread.isRunning}>
         <ComposerPrimitive.Send
           render={
             <TooltipIconButton
               tooltip="Send message"
               side="top"
               type="button"
               variant="default"
               size="icon"
               className="aui-composer-send size-8 rounded-full bg-neutral-900 hover:bg-black text-white shadow-sm transition-transform active:scale-95"
               aria-label="Send message"
             />
           }
         >
           <ArrowUpIcon className="aui-composer-send-icon size-4" />
         </ComposerPrimitive.Send>
       </AuiIf>

       <AuiIf condition={(s) => s.thread.isRunning}>
         <ComposerPrimitive.Cancel
           render={
             <Button
               type="button"
               variant="default"
               size="icon"
               className="aui-composer-cancel size-8 rounded-full bg-neutral-900 text-white shadow-xs"
               aria-label="Stop generating"
             />
           }
         >
           <SquareIcon className="aui-composer-cancel-icon size-3.5 fill-current" />
         </ComposerPrimitive.Cancel>
       </AuiIf>
     </div>
   </div>
 );
};

const MessageError = () => {
 return (
   <MessagePrimitive.Error>
     <ErrorPrimitive.Root className="aui-message-error-root border-destructive bg-destructive/10 text-destructive mt-2 rounded-md border p-3 text-sm">
       <ErrorPrimitive.Message className="aui-message-error-message line-clamp-2" />
     </ErrorPrimitive.Root>
   </MessagePrimitive.Error>
 );
};

const AssistantMessage = () => {
 const {
   ToolFallback: ToolFallbackComponent = ToolFallback,
   ToolGroup,
   ReasoningGroup,
 } = useContext(ThreadComponentsContext);

 const ACTION_BAR_PT = "pt-1.5";
 const ACTION_BAR_HEIGHT = `min-h-7.5 ${ACTION_BAR_PT}`;

 return (
   <MessagePrimitive.Root
     data-slot="aui_assistant-message-root"
     data-role="assistant"
     className="relative w-full pb-2 text-left"
   >
     <div
       data-slot="aui_assistant-message-content"
       className="text-neutral-800 px-1 sm:px-2 leading-relaxed whitespace-pre-wrap break-words w-full text-sm sm:text-base"
     >
       <MessagePrimitive.GroupedParts
         groupBy={groupPartByType({
           reasoning: ["group-chainOfThought", "group-reasoning"],
           "tool-call": ["group-chainOfThought", "group-tool"],
           "standalone-tool-call": [],
         })}
       >
         {({ part, children }) => {
           switch (part.type) {
             case "group-chainOfThought":
               return <div data-slot="aui_chain-of-thought">{children}</div>;
             case "group-tool":
               if (ToolGroup) {
                 return <ToolGroup group={part}>{children}</ToolGroup>;
               }
               return (
                 <ToolGroupRoot variant="ghost">
                   <ToolGroupTrigger
                     count={part.indices.length}
                     active={part.status.type === "running"}
                   />
                   <ToolGroupContent>{children}</ToolGroupContent>
                 </ToolGroupRoot>
               );
             case "group-reasoning": {
               if (ReasoningGroup) {
                 return (
                   <ReasoningGroup group={part}>{children}</ReasoningGroup>
                 );
               }
               const running = part.status.type === "running";
               return (
                 <ReasoningRoot streaming={running}>
                   <ReasoningTrigger active={running} />
                   <ReasoningContent aria-busy={running}>
                     <ReasoningText>{children}</ReasoningText>
                   </ReasoningContent>
                 </ReasoningRoot>
               );
             }
             case "text":
               return <MarkdownText />;
             case "reasoning":
               return <Reasoning {...part} />;
             case "tool-call":
               return part.toolUI ?? <ToolFallbackComponent {...part} />;
             case "data":
               return part.dataRendererUI;
             case "indicator":
               return (
                 <span
                   data-slot="aui_assistant-message-indicator"
                   className="animate-pulse font-sans text-neutral-800"
                   aria-label="Assistant is working"
                 >
                   {"●"}
                 </span>
               );
             default:
               return null;
           }
         }}
       </MessagePrimitive.GroupedParts>
       <MessageError />
     </div>
     <div
       data-slot="aui_assistant-message-footer"
       className={cn("ms-1 sm:ms-2 flex items-center", ACTION_BAR_HEIGHT)}
     >
       <BranchPicker />
       <AssistantActionBar />
     </div>
   </MessagePrimitive.Root>
 );
};

const AssistantActionBar = () => {
 return (
   <ActionBarPrimitive.Root
     hideWhenRunning
     autohide="not-last"
     className="aui-assistant-action-bar-root text-neutral-500 flex gap-1 pt-1"
   >
     <ActionBarPrimitive.Copy render={<TooltipIconButton tooltip="Copy" />}>
       <AuiIf condition={(s) => s.message.isCopied}>
         <CheckIcon className="size-4" />
       </AuiIf>
       <AuiIf condition={(s) => !s.message.isCopied}>
         <CopyIcon className="size-4" />
       </AuiIf>
     </ActionBarPrimitive.Copy>
     <ActionBarPrimitive.Reload
       render={<TooltipIconButton tooltip="Refresh" />}
     >
       <RefreshCwIcon className="size-4" />
     </ActionBarPrimitive.Reload>
     <ActionBarMorePrimitive.Root>
       <ActionBarMorePrimitive.Trigger
         render={
           <TooltipIconButton
             tooltip="More"
             className="data-[state=open]:bg-neutral-200/50"
           />
         }
       >
         <MoreHorizontalIcon className="size-4" />
       </ActionBarMorePrimitive.Trigger>
       <ActionBarMorePrimitive.Content
         side="bottom"
         align="start"
         sideOffset={6}
         className="aui-action-bar-more-content bg-white text-neutral-800 border z-50 min-w-[8rem] overflow-hidden rounded-xl p-1.5 shadow-lg"
       >
         <ActionBarPrimitive.ExportMarkdown
           render={
             <ActionBarMorePrimitive.Item className="aui-action-bar-more-item hover:bg-neutral-100 flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm outline-none select-none" />
           }
         >
           <DownloadIcon className="size-4" />
           Export as Markdown
         </ActionBarPrimitive.ExportMarkdown>
       </ActionBarMorePrimitive.Content>
     </ActionBarMorePrimitive.Root>
   </ActionBarPrimitive.Root>
 );
};

const UserMessage = () => {
 return (
   <MessagePrimitive.Root
     data-slot="aui_user-message-root"
     className="flex w-full flex-col items-end gap-y-1.5 py-1.5 px-1 sm:px-2"
     data-role="user"
   >
     <UserMessageAttachments />
     <div className="relative flex justify-end w-full">
       {/* Guaranteed Inner Bubble Padding */}
       <div
         className="bg-neutral-900 text-white shadow-xs text-left"
         style={{
           padding: "12px 20px",
           borderRadius: "16px 16px 2px 16px",
           maxWidth: "80%",
           fontSize: "15px",
           lineHeight: "1.6",
           whiteSpace: "pre-wrap",
           wordBreak: "break-word"
         }}
       >
         <MessagePrimitive.Parts />
       </div>
       <div className="absolute start-0 top-1/2 -translate-x-full -translate-y-1/2 pe-2">
         <UserActionBar />
       </div>
     </div>
     <BranchPicker
       data-slot="aui_user-branch-picker"
       className="justify-end"
     />
   </MessagePrimitive.Root>
 );
};

const UserActionBar = () => {
 return (
   <ActionBarPrimitive.Root
     hideWhenRunning
     autohide="not-last"
     className="aui-user-action-bar-root flex flex-col items-end"
   >
     <ActionBarPrimitive.Edit
       render={
         <TooltipIconButton
           tooltip="Edit"
           className="aui-user-action-edit text-neutral-500"
         />
       }
     >
       <PencilIcon className="size-4" />
     </ActionBarPrimitive.Edit>
   </ActionBarPrimitive.Root>
 );
};

const EditComposer = () => {
 return (
   <MessagePrimitive.Root
     data-slot="aui_edit-composer-wrapper"
     className="flex flex-col px-1 sm:px-2 w-full"
   >
     <ComposerPrimitive.Root className="aui-edit-composer-root border-neutral-300 ms-auto flex w-full max-w-[92%] sm:max-w-[85%] flex-col rounded-2xl border bg-white shadow-md">
       <ComposerPrimitive.Input
         className="aui-edit-composer-input text-neutral-800 min-h-12 sm:min-h-14 w-full resize-none bg-transparent px-3.5 sm:px-4 pt-3.5 pb-2.5 text-sm sm:text-base outline-none leading-relaxed"
         autoFocus
       />
       <div className="aui-edit-composer-footer mx-2.5 mb-2.5 sm:mx-3 sm:mb-3 flex items-center gap-1.5 self-end">
         <ComposerPrimitive.Cancel
           render={
             <Button variant="ghost" size="sm" className="h-8 rounded-full px-3.5 text-neutral-600" />
           }
         >
           Cancel
         </ComposerPrimitive.Cancel>
         <ComposerPrimitive.Send
           render={
             <Button size="sm" className="h-8 rounded-full px-3.5 bg-neutral-900 text-white" />
           }
         >
           Update
         </ComposerPrimitive.Send>
       </div>
     </ComposerPrimitive.Root>
   </MessagePrimitive.Root>
 );
};

const BranchPicker = ({ className, ...rest }) => {
 return (
   <BranchPickerPrimitive.Root
     hideWhenSingleBranch
     className={cn(
       "aui-branch-picker-root text-neutral-500 -ms-2 me-2 inline-flex items-center text-xs",
       className
     )}
     {...rest}
   >
     <BranchPickerPrimitive.Previous
       render={<TooltipIconButton tooltip="Previous" />}
     >
       <ChevronLeftIcon className="size-3.5" />
     </BranchPickerPrimitive.Previous>
     <span className="aui-branch-picker-state font-medium">
       <BranchPickerPrimitive.Number /> / <BranchPickerPrimitive.Count />
     </span>
     <BranchPickerPrimitive.Next
       render={<TooltipIconButton tooltip="Next" />}
     >
       <ChevronRightIcon className="size-3.5" />
     </BranchPickerPrimitive.Next>
   </BranchPickerPrimitive.Root>
 );
};