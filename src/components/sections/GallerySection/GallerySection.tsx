import React, { useState, useMemo } from 'react';
import { GalleryCard } from '../../cards/GalleryCard';
import { Modal } from '../../common/Modal';
import { EmptyState } from '../../common/EmptyState';
import { SectionTitle } from '../../common/SectionTitle';
import { GALLERY_ITEMS } from '../../../constants';
import type { GalleryItem } from '../../../interfaces';

const CATEGORIES = ['All', 'Oil Painting', 'Digital Art', 'Sculpture', 'Watercolor'];

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <section id="gallery" className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            badge="Exhibition Hall"
            title="Student Gallery"
            subtitle="Step into our digital exhibition hall. A curated space celebrating student creativity, technical mastery, and artistic growth."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-16 border-b border-border-color pb-8 mt-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${selectedCategory === cat
                    ? 'bg-primary border-primary text-white shadow-md shadow-primary/10'
                    : 'bg-white border-border-color text-text-muted hover:border-slate-300'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <GalleryCard key={item.id} item={item} onOpenLightbox={setActiveLightboxItem} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Modal
        isOpen={!!activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
        title={activeLightboxItem?.title}
        size="lg"
      >
        {activeLightboxItem && (
          <div className="flex flex-col gap-6 text-left">
            <div className="aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-inner border border-border-color bg-slate-50">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h4 className="text-xl font-bold text-secondary">{activeLightboxItem.title}</h4>
                  <span className="text-sm text-primary font-semibold">by {activeLightboxItem.artist}</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-text-muted uppercase tracking-wider">
                  {activeLightboxItem.category}
                </span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed mt-4">
                {activeLightboxItem.description}
              </p>
              <span className="text-[10px] text-text-muted mt-2">
                Created: {new Date(activeLightboxItem.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default GallerySection;
