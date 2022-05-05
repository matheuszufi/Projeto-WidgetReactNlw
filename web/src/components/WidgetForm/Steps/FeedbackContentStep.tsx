import { ArrowLeft, Camera } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "./ScreenshotButton";

interface FeedbackContentStepProps{
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep ({ 
    feedbackType, 
    onFeedbackRestartRequested
} : FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  
    return (
        <>
            <header>
                <button 
                type="button" 
                className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                onClick={onFeedbackRestartRequested}
                >
                
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton/>
            </header>

            <form className="my-4 w-full">
                <textarea 
                className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-400 border-zinc-600 bg-transparent rounded-md focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scollbar-track-transparent scrollbar-thin" 
                placeholder="Conte com detalhes o que está acontecendo..."
                />

                <footer className="flex gap-2 mt-2">
                  <ScreenshotButton />
                   
                    <button
                    type="submit"
                    className="p-2 bg-purple-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-purple-500 transition-colors"
                    >
                        Enviar Feedback
                    </button>
                </footer>            
            
            
            
            </form>
        </>
    )     
   }