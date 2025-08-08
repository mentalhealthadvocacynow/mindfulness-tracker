import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DailyCheckIn from "./pages/DailyCheckIn";
import MicroMeditations from "./pages/MicroMeditations";
import ProgressTips from "./pages/ProgressTips";
import GratitudeJournal from "./pages/GratitudeJournal";
import GratitudeReflection from "./pages/GratitudeReflection";
import QuickBoost from "./pages/QuickBoost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/check-in" element={<DailyCheckIn />} />
          <Route path="/meditations" element={<MicroMeditations />} />
          <Route path="/progress" element={<ProgressTips />} />
          <Route path="/gratitude" element={<GratitudeJournal />} />
          <Route path="/reflection" element={<GratitudeReflection />} />
          <Route path="/boost" element={<QuickBoost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;