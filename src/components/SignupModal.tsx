import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';
import ParallaxTilt from 'react-parallax-tilt';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
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
              {/* Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-pink-100 to-violet-200 opacity-30"
                animate={{
                  background: [
                    'linear-gradient(to bottom right, #fce7f3, #ddd6fe)',
                    'linear-gradient(to bottom right, #ddd6fe, #fce7f3)',
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
                <h2 className="text-2xl font-bold mb-6">Create your account</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    <label className="text-sm font-medium">Password</label>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      value={formState.password}
                      onChange={(e) => setFormState({ ...formState, password: e.target.value })}
                      className="w-full transition-all duration-300 focus:ring-2 focus:ring-[#E5484D]/20"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#E5484D] text-white hover:bg-[#E5484D]/90 transition-all duration-300"
                  >
                    Sign Up
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
