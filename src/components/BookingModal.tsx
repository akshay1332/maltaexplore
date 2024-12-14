import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';
import ParallaxTilt from 'react-parallax-tilt';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [formState, setFormState] = useState({
    date: '',
    time: '',
    adults: 1,
    children: 0,
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking logic here
    console.log(formState);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <ParallaxTilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.02}
            transitionSpeed={2000}
            gyroscope={true}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 w-full max-w-md relative overflow-hidden shadow-2xl"
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 opacity-30"
                animate={{
                  background: [
                    'linear-gradient(to bottom right, #dbeafe, #dcfce7)',
                    'linear-gradient(to bottom right, #dcfce7, #dbeafe)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              />

              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 rounded-full hover:bg-black/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6">Book Your Tour</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> Date
                      </label>
                      <Input
                        type="date"
                        value={formState.date}
                        onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                        className="w-full transition-all duration-300 focus:ring-2 focus:ring-[#E5484D]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Clock className="w-4 h-4" /> Time
                      </label>
                      <Input
                        type="time"
                        value={formState.time}
                        onChange={(e) => setFormState({ ...formState, time: e.target.value })}
                        className="w-full transition-all duration-300 focus:ring-2 focus:ring-[#E5484D]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Users className="w-4 h-4" /> Adults
                      </label>
                      <Input
                        type="number"
                        min="1"
                        value={formState.adults}
                        onChange={(e) => setFormState({ ...formState, adults: parseInt(e.target.value) })}
                        className="w-full transition-all duration-300 focus:ring-2 focus:ring-[#E5484D]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Users className="w-4 h-4" /> Children
                      </label>
                      <Input
                        type="number"
                        min="0"
                        value={formState.children}
                        onChange={(e) => setFormState({ ...formState, children: parseInt(e.target.value) })}
                        className="w-full transition-all duration-300 focus:ring-2 focus:ring-[#E5484D]/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full transition-all duration-300 focus:ring-2 focus:ring-[#E5484D]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full transition-all duration-300 focus:ring-2 focus:ring-[#E5484D]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <Input
                      type="tel"
                      placeholder="+1 234 567 890"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full transition-all duration-300 focus:ring-2 focus:ring-[#E5484D]/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#E5484D] text-white hover:bg-[#E5484D]/90 transition-all duration-300"
                  >
                    Book Now
                  </Button>
                </form>
              </motion.div>
            </motion.div>
          </ParallaxTilt>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
