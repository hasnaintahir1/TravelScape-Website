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
     className="aui-root aui-thread-root bg-background @container flex h-full flex-col items-center justify-between overflow-hidden w-full"
     style={{
       ["--thread-max-width"]: "44rem",
       ["--composer-bg"]:
         "color-mix(in oklab, var(--color-muted) 30%, var(--color-background))",
       ["--composer-radius"]: "1.5rem",
       ["--composer-padding"]: "12px",
     }}
   >
     {/* Scrollable Viewport for Messages */}
     <ThreadPrimitive.Viewport
       turnAnchor="top"
       data-slot="aui_thread-viewport"
       className="relative flex min-h-0 flex-1 w-full flex-col items-center overflow-x-auto overflow-y-auto scroll-smooth"
     >
       <div className="mx-auto flex min-h-full w-full max-w-(--thread-max-width) flex-1 flex-col items-center justify-center px-4 pt-6 pb-6">
         <AuiIf condition={isNewChatView}>
           <div className="flex w-full flex-1 flex-col items-center justify-center py-12">
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

     {/* Anchored Bottom Section */}
     <div className="w-full shrink-0 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xs border-t border-border/20 pt-3 pb-4">
       <div className="flex w-full max-w-(--thread-max-width) flex-col items-center justify-center gap-2 px-4 relative">
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
         className="aui-thread-scroll-to-bottom dark:border-border dark:bg-background dark:hover:bg-accent absolute -top-12 left-1/2 -translate-x-1/2 rounded-full p-2.5 shadow-md disabled:invisible"
       />
     }
   >
     <ArrowDownIcon className="size-4" />
   </ThreadPrimitive.ScrollToBottom>
 );
};

const ThreadWelcome = () => {
 return (
   <div className="aui-thread-welcome-root mb-4 flex flex-col items-center justify-center text-center">
     <h1 className="aui-thread-welcome-message-inner fade-in slide-in-from-bottom-1 animate-in fill-mode-both text-3xl font-semibold tracking-tight duration-200 text-center">
       How can I help you today?
     </h1>
   </div>
 );
};

const ThreadSuggestions = () => {
 return (
   <div className="aui-thread-welcome-suggestions flex w-full flex-wrap items-center justify-center gap-2 pt-2 px-2">
     <ThreadPrimitive.Suggestions>
       {() => <ThreadSuggestionItem />}
     </ThreadPrimitive.Suggestions>
   </div>
 );
};

const ThreadSuggestionItem = () => {
 return (
   <div className="aui-thread-welcome-suggestion-display fade-in slide-in-from-bottom-2 animate-in fill-mode-both duration-200">
     <SuggestionPrimitive.Trigger
       send
       render={
         <Button
           variant="ghost"
           className="aui-thread-welcome-suggestion text-foreground hover:bg-muted border-border/60 h-auto gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-normal whitespace-nowrap transition-colors shadow-xs"
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
           className="border-border/60 data-[dragging=true]:border-ring focus-within:border-border/80 dark:border-muted-foreground/20 dark:focus-within:border-muted-foreground/40 flex w-full flex-col gap-2 rounded-(--composer-radius) border bg-(--composer-bg) p-2.5 shadow-md backdrop-blur-xs transition-[border-color,box-shadow] data-[dragging=true]:border-dashed data-[dragging=true]:bg-[color-mix(in_oklab,var(--color-accent)_50%,var(--color-background))]"
         />
       }
     >
       <ComposerAttachments />
       <ComposerPrimitive.Input
         placeholder="Send a message..."
         className="aui-composer-input caret-primary placeholder:text-muted-foreground/70 max-h-36 min-h-[48px] w-full resize-none bg-transparent px-4 py-3 text-base outline-none leading-relaxed"
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
   <div className="aui-composer-action-wrapper flex items-center justify-between w-full px-2 pb-1">
     <ComposerAddAttachment />
     <div className="flex items-center gap-2">
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
                 className="aui-composer-dictate size-8 rounded-full hover:bg-muted"
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
               className="aui-composer-send size-8 rounded-full shadow-xs transition-transform active:scale-95"
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
               className="aui-composer-cancel size-8 rounded-full shadow-xs"
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
     <ErrorPrimitive.Root className="aui-message-error-root border-destructive bg-destructive/10 text-destructive dark:bg-destructive/5 mt-2 rounded-md border p-3 text-sm dark:text-red-200">
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
     className="fade-in slide-in-from-bottom-1 animate-in relative -mb-7.5 pb-7.5 duration-150 [contain-intrinsic-size:auto_200px] [content-visibility:auto] w-full"
   >
     <div
       data-slot="aui_assistant-message-content"
       className="text-foreground px-2 leading-relaxed wrap-break-word w-full"
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
                   className="animate-pulse font-sans"
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
       className={cn("ms-2 flex items-center", ACTION_BAR_HEIGHT)}
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
     className="aui-assistant-action-bar-root text-muted-foreground animate-in fade-in col-start-3 row-start-2 -ms-1 flex gap-1 duration-200"
   >
     <ActionBarPrimitive.Copy render={<TooltipIconButton tooltip="Copy" />}>
       <AuiIf condition={(s) => s.message.isCopied}>
         <CheckIcon className="animate-in zoom-in-50 fade-in duration-200 ease-out" />
       </AuiIf>
       <AuiIf condition={(s) => !s.message.isCopied}>
         <CopyIcon className="animate-in zoom-in-75 fade-in duration-150" />
       </AuiIf>
     </ActionBarPrimitive.Copy>
     <ActionBarPrimitive.Reload
       render={<TooltipIconButton tooltip="Refresh" />}
     >
       <RefreshCwIcon />
     </ActionBarPrimitive.Reload>
     <ActionBarMorePrimitive.Root>
       <ActionBarMorePrimitive.Trigger
         render={
           <TooltipIconButton
             tooltip="More"
             className="data-[state=open]:bg-accent"
           />
         }
       >
         <MoreHorizontalIcon />
       </ActionBarMorePrimitive.Trigger>
       <ActionBarMorePrimitive.Content
         side="bottom"
         align="start"
         sideOffset={6}
         className="aui-action-bar-more-content bg-popover/95 text-popover-foreground data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-xl border p-1.5 shadow-lg backdrop-blur-sm"
       >
         <ActionBarPrimitive.ExportMarkdown
           render={
             <ActionBarMorePrimitive.Item className="aui-action-bar-more-item hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm outline-none select-none" />
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
     className="fade-in slide-in-from-bottom-1 animate-in grid auto-rows-auto grid-cols-[minmax(72px,1fr)_auto] content-start gap-y-2 px-2 duration-150 [contain-intrinsic-size:auto_200px] [content-visibility:auto] [&:where(>*)]:col-start-2 w-full"
     data-role="user"
   >
     <UserMessageAttachments />
     <div className="aui-user-message-content-wrapper relative col-start-2 min-w-0">
       <div className="aui-user-message-content peer bg-muted text-foreground rounded-2xl px-4 py-2.5 wrap-break-word empty:hidden shadow-xs">
         <MessagePrimitive.Parts />
       </div>
       <div className="aui-user-action-bar-wrapper absolute start-0 top-1/2 -translate-x-full -translate-y-1/2 pe-2 peer-empty:hidden rtl:translate-x-full">
         <UserActionBar />
       </div>
     </div>
     <BranchPicker
       data-slot="aui_user-branch-picker"
       className="col-span-full col-start-1 row-start-3 -me-1 justify-end"
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
           className="aui-user-action-edit"
         />
       }
     >
       <PencilIcon />
     </ActionBarPrimitive.Edit>
   </ActionBarPrimitive.Root>
 );
};

const EditComposer = () => {
 return (
   <MessagePrimitive.Root
     data-slot="aui_edit-composer-wrapper"
     className="flex flex-col px-2 [contain-intrinsic-size:auto_200px] [content-visibility:auto] w-full"
   >
     <ComposerPrimitive.Root className="aui-edit-composer-root border-border/60 dark:border-muted-foreground/15 ms-auto flex w-full max-w-[85%] flex-col rounded-(--composer-radius) border bg-(--composer-bg) shadow-md">
       <ComposerPrimitive.Input
         className="aui-edit-composer-input text-foreground min-h-14 w-full resize-none bg-transparent px-4 pt-3 pb-2 text-base outline-none leading-relaxed"
         autoFocus
       />
       <div className="aui-edit-composer-footer mx-2.5 mb-2.5 flex items-center gap-1.5 self-end">
         <ComposerPrimitive.Cancel
           render={
             <Button variant="ghost" size="sm" className="h-8 rounded-full px-3.5" />
           }
         >
           Cancel
         </ComposerPrimitive.Cancel>
         <ComposerPrimitive.Send
           render={
             <Button size="sm" className="h-8 rounded-full px-3.5" />
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
       "aui-branch-picker-root text-muted-foreground -ms-2 me-2 inline-flex items-center text-xs",
       className
     )}
     {...rest}
   >
     <BranchPickerPrimitive.Previous
       render={<TooltipIconButton tooltip="Previous" />}
     >
       <ChevronLeftIcon />
     </BranchPickerPrimitive.Previous>
     <span className="aui-branch-picker-state font-medium">
       <BranchPickerPrimitive.Number /> / <BranchPickerPrimitive.Count />
     </span>
     <BranchPickerPrimitive.Next
       render={<TooltipIconButton tooltip="Next" />}
     >
       <ChevronRightIcon />
     </BranchPickerPrimitive.Next>
   </BranchPickerPrimitive.Root>
 );
};