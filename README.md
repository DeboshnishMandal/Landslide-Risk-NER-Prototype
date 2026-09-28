# StormSignal (Bhu-Suraksha NER)
## AI Landslide Intelligence, Road Connectivity & Media Verification Engine for North East India

An AI/ML-driven disaster risk reduction, early warning, and GIS monitoring platform tailored specifically for the fragile geology and monsoon vulnerabilities of India's North Eastern Region (Assam, Meghalaya, Sikkim, Arunachal Pradesh, Mizoram, Nagaland, Manipur, and Tripura).

---

## 🌟 Core Differentiators

### 1. 🛣️ Road Connectivity & Blockage Intelligence
StormSignal goes beyond identifying landslide-prone slopes — it determines how a potential or reported landslide impacts **ROAD CONNECTIVITY & LIFELINE ACCESS**:
- **Dynamic Road Status Classification**: Classifies arterial highways into `SAFE`, `AT RISK`, or `BLOCKED` (and `CLEARING`).
- **Proximity Intersection with Hazard Buffers**: Automatically shifts road corridors traversing high-susceptibility zones ($LSI \ge 70$, Factor of Safety $FS < 1.0$) into `AT RISK`.
- **Field Report Blockage Detection**: Ingests confirmed, geo-tagged citizen and field official reports to switch road status dynamically to `BLOCKED`.
- **Isolated Communities & Cut-Off Infrastructure**: Identifies which villages (e.g. Melli, Birik Dara, Teesta Dam, Dzüdza, Tupul) and critical facilities (hospitals, substations, tunnels) become severed from transport networks.
- **Alternative Bypass Routing**: Dynamically renders alternative bypass routes (e.g., *Via Lava - Algarah - Reshi - Pedong* for NH-10) with distance, extra transit hours, and load capacities.
- **Nearby Safety Points & Evacuation Shelters**: Displays designated relief camps, helipads, and shelters with live occupancy tracking.
- **Multi-Factor Emergency Operational Prioritization**: Integrates hazard score ($40\%$), connectivity & isolated population impact ($35\%$), and verified report urgency ($25\%$) to calculate emergency priorities (`NORMAL` $\to$ `ELEVATED` $\to$ `HIGH` $\to$ `CRITICAL`).

### 2. 📸 AI-Assisted Photo / Video Verification Workflow
Citizens and field officials can upload photos or videos of active rockfalls, slope tension cracks, road subsidence, debris mud flows, and infrastructure damage.
- **Multi-Stage Verification Pipeline**:
  $$\text{Media Upload \& EXIF GPS} \longrightarrow \text{CV Feature Segmentation} \longrightarrow \text{Geotech \& Weather Check} \longrightarrow \text{Confidence Score (0-100\%)} \longrightarrow \text{Verification Status}$$
- **Verification Statuses**: `UNVERIFIED`, `UNDER REVIEW`, `VERIFIED`, `FLAGGED`.
- **Explainable Forensic Rationale**: Concise natural language reasoning explaining why the media is consistent with local slope steepness, radar rainfall (mm/24h), and shale/gneiss geology.
- **Probabilistic Guidance Disclaimer**: *"AI-assisted media verification provides probabilistic consistency scoring against terrain & telemetry data; it assists human emergency operators rather than asserting absolute forensic certainty."*

---

## 🔄 End-to-End Closed-Loop Integration

```
DATA (IMD Radar + Sensors)
       ↓
AI RISK PREDICTION (Infinite Slope FS + LSI)
       ↓
GIS RISK MAP (Hazard Buffers)
       ↓
ROAD CONNECTIVITY ANALYSIS (Safe ➔ At Risk ➔ Blocked)
       ↓
FIELD REPORT + PHOTO/VIDEO MEDIA (Crowdsourced)
       ↓
AI-ASSISTED MEDIA VERIFICATION (Consistency & Confidence)
       ↓
RISK / PRIORITY UPDATE (Normal ➔ Critical)
       ↓
MULTILINGUAL EMERGENCY ALERT BROADCAST
       ↓
RESPONSE DISPATCH + ALTERNATIVE ROUTE
```

---

## 🚀 Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation & Launch

1. **Navigate to the project folder:**
   ```bash
   cd C:\Users\hp\.gemini\antigravity\scratch\ner-landslide-early-warning
   ```

2. **Install dependencies (if not already installed):**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open the browser:**
   Navigate to [http://localhost:5173](http://localhost:5173) or the port indicated in the terminal.

---

## 🎯 How to Demonstrate the Prototype

1. **Test the Closed-Loop Scenario Stepper**:
   - On the **Command Center (Overview)** tab, observe the **StormSignal Closed-Loop Stepper** at the top.
   - Click through **Steps 01 to 07** or hit **"Auto-Play Demo"** to see the full progression from Baseline $\to$ Cloudburst Surge $\to$ NH-10 At Risk $\to$ Media Upload $\to$ AI Verification (94%) $\to$ Road BLOCKED $\to$ 3 Villages Isolated $\to$ Lava Bypass Activated $\to$ Priority Escalated to CRITICAL.

2. **Test AI-Assisted Photo / Video Verification**:
   - Click the **"AI Media Verification & Field Reports"** tab in the sidebar.
   - Use the **1-Click Test Presets** (e.g. *NH-10 Rockfall*, *Sohra Tension Crack*, *Dimapur Collapse*, or the *Test Flagged Sample*) or upload any custom photo/video file from your computer.
   - Watch the live multi-stage verification pipeline calculate confidence %, feature segmentation tags, status badge, and forensic rationale.
   - Submit the report and verify that it immediately updates the road network and GIS map.

3. **Inspect Road Connectivity on GIS Map**:
   - Click the **"Interactive GIS Map"** tab.
   - Toggle layers: *Highways*, *Alternative Bypass Routes*, *Isolated Villages*, and *Evacuation Shelters*.
   - Click any road polyline to open the comprehensive **Road Detail Modal**.
