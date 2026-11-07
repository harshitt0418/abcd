# Saurabh Agro Chemicals (SAC) — Official Institutional Frontend Mockup

A bespoke, ultra-luxury frontend website mockup engineered for **Saurabh Agro Chemicals**, an established manufacturer and supplier serving Indian Railways, Central & State Government Departments, Municipal Corporations, and institutional clients since 1984.

This project uses the official company brochure as the primary source of truth, styled in an editorial luxury aesthetic inspired by high-end architectural studios (Playfair Display serif headlines, warm ivory and obsidian palette, brushed brass accents, 3D mouse parallax cards, ambient cursor glow, and an interactive slide-over requisition drawer).

---

## 🏛️ Business & Company Background (Brochure Source of Truth)

* **Company Name:** Saurabh Agro Chemicals (Brand: SAC)
* **Managing Director:** Mr. Sanjay Singh
* **Establishment:** 1984 (Over 40 years of institutional supply and tender expertise)
* **Registered Office & HQ:** Shivpur Kunraghat, Gorakhpur, Uttar Pradesh – 273008
* **Branch Office & Manufacturing Facility:** V-56, Sector-A, Bhagwati Vihar, Uttam Nagar, New Delhi – 110059
* **Verified Email:** `saurabhagrochemical@gmail.com`
* **Verified Website:** `saurabhagrochemical.com`
* **Sister Concerns:**
  1. *Supriya Trading Company* (Lucknow) – Institutional trading & distribution
  2. *Narayan Agro Chemical and Fertilizer* – Agricultural chemicals and fertilizers
* **Primary Institutional Clientele:**
  * Indian Railways (Supplying RDSO drawing-approved SS dustbins and platform sanitation)
  * Central & State Government Departments
  * Municipal Corporations (Gram Panchayats, Nagar Palikas, Mahanagar Palikas)
  * Andhra Pradesh & Telangana State Governments
  * Indian Army, Indian Navy & ONGC

---

## 📦 Product Range (Extracted Direct from Brochure)

The project includes **40 authentic product specifications and cropped photographs** categorized across 5 core divisions:

1. **Stainless Steel Dustbins (Grade 304):**
   * Stainless Steel Perforated Dustbin
   * Stainless Steel Pole Hanging Twin Dustbin (Dual stream segregation)
   * Stainless Steel Pole Hanging Single Dustbin
   * **Stainless Steel Dustbin (Approved by RDSO drawing)** with tamper-proof chain & bracket for Indian Railways coaches
   * Stainless Steel Swing Dustbin (Glossy finish, 360° counter-weight swing lid)
   * Stainless Steel D-Shape Dustbin (Wall-hugging profile)
   * Stainless Steel Pedal Dustbin (Touchless hygienic foot pedal)
   * Stainless Steel Push Dustbin (Spring-loaded push door)
   * Stainless Steel Open Taper Cylindrical Dustbin
   * Stainless Steel Square Dustbin

2. **Plastic Dustbins & Waste Management Systems:**
   * Wheelie Plastic Dustbins (Durable, weather-resistant HDPE)
   * Plastic Dustbins Mounted on Metal Stand (3-color trio set for Gram Panchayats & Nagar Palika)
   * Bio-Medical Waste Pedal Dustbins (Color-coded with biohazard segregation)
   * UV-Stabilized Dome Shape Dustbins (Rainproof dome hood)
   * 4-Wheeled HDPE Bulk Waste Dustbins (Swivel casters with foot brakes)
   * Sukha Kachra & Geela Kachra Twin Bins (Dry/Wet municipal segregation)
   * Heavy Duty Municipal Garbage Bags (Puncture resistant with tie-tapes)

3. **Industrial Safety & PPE Products:**
   * Premium Fire Extinguisher (**ISI Mark Certified**)
   * Premium Reflective Safety Jacket (Fluorescent mesh with 360° retro-reflective tape)
   * Industrial Safety Helmet (Multi-point shock absorption cradle)
   * Safety Belt & Fall Harness (Full body fall protection with double lanyard & scaffold hooks)
   * Safety Shoes & Gum Boots (Waterproof PVC, deep cleated anti-slip sole)
   * Natural Latex & Chemical Resistant Hand Gloves
   * Unisex Full Length Industrial Rain Coat (Heat-sealed leakproof seams)
   * Life Saving Jacket (High buoyancy closed-cell foam)
   * First Aid Kit Cabinet (Lockable multi-compartment wall mount)
   * Weatherproof Industrial Winter Jacket (Windproof insulated parka)

4. **Insecticides & Agro Chemicals:**
   * Lambda Cyhalothrin 5-10% WP (Synthetic pyrethroid wettable powder)
   * Industrial Hydrated Lime Powder (25 kg bag, calcium hydroxide)
   * Pyrethrum 2% Extract (Natural botanical insecticide)
   * Stable Bleaching Powder (25 kg bag, 32%–35% available chlorine)
   * Deltamethrin 1.25% ULV (Ultra Low Volume thermal/cold fogging formula)
   * Temephos 50% E.C. Paraguard (WHO-grade anti-larval mosquito control)
   * De-Larve 25 WP (Larvicide & maggot control in drains and open grounds)
   * Malathion 50% EC (Foliar spray for agricultural crops)
   * Deltamethrin 2.5% Flow (Suspension concentrate for Malaria/Dengue vector defense)
   * Malathion Technical 95% (High purity concentrated active)

5. **Sanitation & Field Equipment:**
   * Thermal Fogging Machine (Pulse-jet vector eradication aerosol generator)
   * Multi-Attachment Grass Cutter (35 cc & 50 cc high torque with tiller, saw, and trimmer head)
   * Two-Wheel Handcraft / Heavy Wheelbarrow (Pressed steel hopper on twin pneumatic tires)

---

## 🎨 High-End Luxury Motion & Animation System

Inspired by elite architectural and luxury digital design (such as *Concrete Management*, *Apple*, and modern luxury showcase websites):

* **Magnetic Buttons (`MagneticButton.jsx`):** Primary and secondary call-to-actions subtly pull toward the cursor with spring physics on hover.
* **Dynamic Spotlight Glare (`ProductCard.jsx`):** Real-time radial champagne light follows mouse coordinates across each product card surface.
* **3D Perspective Mouse Parallax:** Cards react to three-dimensional tilt (`rotateX`, `rotateY`) as the mouse moves over them.
* **Animated Chronograph Counters (`AnimatedCounter.jsx`):** Key metrics (`1984`, `40+`, `02 Hubs`) roll smoothly into place upon scrolling into view.
* **Floating Champagne Gold Dust (`GoldDustParticles.jsx`):** Atmospheric, slowly-drifting golden bokeh particles in dark exhibition containers.
* **Vertical Nav Progress Dots (`FloatingNavDots.jsx`):** Desktop right-edge navigation tracker highlighting current section with hover tooltips and smooth jump.
* **Ambient Desktop Cursor Follower (`LuxuryCursor.jsx`):** Precision needle dot and ambient golden light halo tracking desktop interactions.
* **Cinematic Ken Burns Hero Showcase (`Hero.jsx`):** 5-exhibit architectural presentation with continuous live linear timer progress bar (6s duration).
* **Slide-over Requisition Dossier Drawer (`DossierDrawer.jsx`):** Concierge slide-out panel allowing institutional buyers to inspect and curate their procurement list.
* **Dual Confetti Cannons:** Synchronized golden and bronze celebratory blast upon completing the RFQ requisition mockup.

---

## 🚀 How to Run the Project Locally

```bash
# Clone the repository
git clone https://github.com/harshitt0418/abcd.git
cd abcd

# Install dependencies
npm install

# Start local development server
npm run dev
# The application will launch at http://localhost:3000

# Build for production
npm run build
```
