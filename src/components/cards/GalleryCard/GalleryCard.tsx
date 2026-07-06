import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import type { GalleryItem } from '../../../interfaces';

interface GalleryCardProps {
  item: GalleryItem;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ item, onOpenLightbox }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={() => onOpenLightbox(item)}
      className="relative rounded-3xl overflow-hidden shadow-md group cursor-pointer border border-border-color/50 aspect-square"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
      />

      {/* Hover Info Overlay */}
      <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
        {/* Maximize Icon */}
        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-all duration-300 hover:bg-primary">
          <Maximize2 size={16} />
        </div>

        <span className="text-[10px] font-bold uppercase tracking-wider text-highlight mb-1">
          {item.category}
        </span>
        <h3 className="font-heading font-bold text-lg text-white mb-0.5">
          {item.title}
        </h3>
        <p className="text-xs text-slate-300">
          by {item.artist}
        </p>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
