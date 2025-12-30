import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import LeadForm from "./LeadForm";

interface BookingModalProps {
    children: React.ReactNode;
}

const BookingModal = ({ children }: BookingModalProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-5xl w-[95vw] p-0 border-none bg-transparent shadow-none">
                <DialogTitle className="sr-only">Book Your Trip</DialogTitle>
                <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
                    <LeadForm variant="compact" isModal={true} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BookingModal;
