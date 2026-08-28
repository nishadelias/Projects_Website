import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    slug: 'cpu-sim',
    name: 'RISC-V CPU Simulator',
    shortDescription:
      'A cycle-accurate RV32 teaching simulator with a Qt6 GUI. Visualize pipeline execution, cache behavior, and branch prediction in real time.',
    image: 'images/cpu-sim/thumbnail.svg',
    githubUrl: 'https://github.com/nishadelias/CPU_SIM',
    overview: [
      'This is a cycle-accurate RISC-V CPU simulator built for computer architecture education. Unlike a disassembler or a trace dump, you can watch instructions move through a five-stage pipeline — fetch, decode, execute, memory, writeback — cycle by cycle. You can also swap cache organizations and branch predictors and immediately see the impact on hit rate, prediction accuracy, and CPI.',
      'The simulator models a 32-bit RISC-V pipeline with hazard detection, forwarding, branch prediction, and a unified cache in front of 64 kilobytes of RAM. It is a teaching tool — not a replacement for QEMU or Spike — but that is the point: everything is visible and measurable.',
      'Three things make this useful in a classroom: visualization (you see stalls and flushes), experimentation (swap cache or predictor and rerun), and implementation (students extend the simulator with their own algorithms using step-by-step guides for custom cache schemes and branch predictors).',
    ],
    techStack: [
      'C++17',
      'CMake',
      'Qt6',
      'RV32IMCF',
      'GitHub Actions CI',
    ],
    photoWalkthroughIntro:
      'Screenshots from the Qt6 GUI. The Statistics tab is especially useful for seeing how different branch prediction algorithms and cache schemes affect performance — swap a dropdown, rerun, and watch CPI, hit rate, and predictor accuracy change.',
    photoSections: [
      {
        title: 'Pipeline Execution Trace',
        caption:
          'Cycle-by-cycle view of the five-stage pipeline. Instructions advance through IF/ID, ID/EX, EX/MEM, and MEM/WB; stalls and flushes are highlighted so students can see hazards and control transfers as they happen.',
        image: 'images/cpu-sim/pipeline_execution_trace.png',
      },
      {
        title: 'Instruction Dependencies',
        caption:
          'RAW hazards between producers and consumers while both can still occupy the pipeline. Makes data dependencies concrete before talking about forwarding and load-use stalls.',
        image: 'images/cpu-sim/instruction_dependencies.png',
      },
      {
        title: 'Register File',
        caption:
          'Live RISC-V register state (x0–x31) with architectural names. Recently written registers are highlighted so you can follow results as instructions retire.',
        image: 'images/cpu-sim/register_file.png',
      },
      {
        title: 'Memory Access History',
        caption:
          'Every load and store with address, value, and cache hit/miss. Ties a specific miss back to the instruction and address that caused it.',
        image: 'images/cpu-sim/memory_access_history.png',
      },
      {
        title: 'Statistics',
        caption:
          'This is where configuration choices show up as numbers. Compare branch predictors (Always Not Taken, GShare, Tournament, and more) and cache schemes (direct-mapped, set-associative, fully associative) side by side: CPI, cache hit rate, pipeline utilization, and branch predictor accuracy update after each run so the performance impact is obvious.',
        image: 'images/cpu-sim/statistics.png',
      },
    ],
    videoWalkthroughIntro:
      'A four-part demo series covering the simulator from overview to hands-on labs. Videos will be added here as they are published.',
    videoSections: [
      {
        number: 1,
        title: 'What Is This, and Why Use It in Class?',
        suggestedTitle:
          'RISC-V CPU Simulator for Computer Architecture Classes (Overview)',
        summary:
          'An introduction to the simulator and its educational niche. Covers what the tool models — a five-stage pipeline with branch prediction and a unified cache — and walks through a quick start demo loading and running a program in the GUI. Explains how visualization, experimentation, and student extensibility make it useful for computer architecture courses.',
      },
      {
        number: 2,
        title: 'Seeing the Pipeline: Stalls, Forwarding, and Dependencies',
        suggestedTitle:
          'Watch a 5-Stage Pipeline Run Cycle-by-Cycle (Educational CPU Sim)',
        summary:
          'A cycle-by-cycle walkthrough of the pipeline execution trace, register file, and instruction dependencies. Demonstrates data forwarding with a hand-written hex program, optional load-use stalls, and memory access history — the material that is usually hardest to teach from a textbook alone.',
      },
      {
        number: 3,
        title: 'Branch Prediction Lab: Compare, Measure, Learn',
        suggestedTitle:
          'Branch Prediction Lab: From 37% to 96% Accuracy in One Dropdown',
        summary:
          'Uses the branch-heavy count_primes program to compare Always Not Taken (~37% accuracy) against GShare (~96% accuracy). Shows how mispredictions cause pipeline flushes and CPI increases, and how a dropdown change produces dramatic performance swings. Covers the CLI benchmark workflow and the student lab for implementing custom predictors.',
      },
      {
        number: 4,
        title: 'Cache Experiments and Building Your Own Components',
        suggestedTitle:
          'Cache Experiments + How Students Build Their Own Predictors',
        summary:
          'Compares direct-mapped, set-associative, and fully associative cache organizations on a Fibonacci program. Ties cache misses to specific addresses in the memory access history, then walks through the extensibility frameworks for implementing custom cache schemes and branch predictors. Closes with a full course narrative mapping syllabus topics to simulator features.',
      },
    ],
    bonusVideo: {
      title: 'Hex Programs, No Toolchain',
      summary:
        'A quick demo showing that you do not need a RISC-V cross-compiler to use the simulator. The instruction_memory/ folder has ready-made hex programs for forwarding, load-use hazards, and more — zero setup beyond building the simulator.',
    },
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/nishadelias/CPU_SIM',
      },
      {
        label: 'Instructor Guide',
        url: 'https://github.com/nishadelias/CPU_SIM/blob/main/INSTRUCTOR.md',
      },
      {
        label: 'Cache Schemes Lab Guide',
        url: 'https://github.com/nishadelias/CPU_SIM/blob/main/CACHE_SCHEMES.md',
      },
      {
        label: 'Branch Predictors Lab Guide',
        url: 'https://github.com/nishadelias/CPU_SIM/blob/main/BRANCH_PREDICTORS.md',
      },
    ],
  },
  {
    slug: 'pipelined-adder-ltspice',
    name: '2-Stage Pipelined CMOS Adder',
    shortDescription:
      'A transistor-level 2-bit ripple-carry adder with two pipeline stages, designed and simulated in LTspice using TSMC 0.18 µm CMOS. Characterized to ~1.67 GHz through pipelining and device sizing.',
    image: 'images/pipelined-adder-ltspice/thumbnail.svg',
    githubUrl: 'https://github.com/nishadelias/2-stage-pipelined-adder-ltspice',
    overview: [
      'This project is a transistor-level design and simulation of a 2-bit ripple-carry adder with two pipeline stages, built in LTspice on a TSMC 0.18 µm CMOS process at 1.8 V. All primary inputs are registered. Stage 1 generates S0 and carry C1, intermediate signals are synchronized through pipeline flip-flops, and Stage 2 generates S1 and carry C2 before the final output registers.',
      'The datapath uses custom sum and AOI-based carry logic, inverters, and a custom master-slave D flip-flop (ff_custom) characterized at a 15 fF load: clock-to-Q of 143.4 ps, setup of 80 ps, and hold of −60 ps. Device sizing followed the register-to-register constraint Tclk ≥ tcq + tlogic + tsetup, targeting a balanced split of about 0.34 ns in Stage 1 and 0.377 ns in Stage 2.',
      'The smallest cleanly passing clock period in LTspice was 0.6 ns, for a measured fmax of about 1.67 GHz, two-cycle latency, and 1.67 Gresults/s throughput. Transient waveforms confirm one cycle through Stage 1 and one more through Stage 2; a 0.5 ns clock was treated as failing because of degraded output swing.',
    ],
    techStack: [
      'LTspice',
      'TSMC 0.18 µm CMOS',
      'Custom CMOS Logic',
      'Master-Slave D Flip-Flop',
      'Transient Simulation',
      'Setup/Hold Characterization',
    ],
    photoWalkthroughIntro:
      'Schematics and LTspice results from the design report: flip-flop characterization, the 2-stage adder, and the timing and frequency sweeps that set fmax at 1.67 GHz.',
    photoSections: [
      {
        title: 'Top-Level Pipelined Adder Schematic',
        caption:
          'Hierarchical two-stage sequential adder bench. Five input flip-flops register A1, A0, B1, B0, and C0; Stage 1 computes S0 and C1, Stage 2 computes S1 and C2, and registered pass-throughs keep Stage 2 inputs time-aligned. Outputs drive 100 fF loads.',
        image: 'images/pipelined-adder-ltspice/pipelined-adder-schematic.jpg',
      },
      {
        title: 'Custom D Flip-Flop (ff_custom)',
        caption:
          'Master-slave D flip-flop used as every pipeline register. Transmission-gate latches with local clock inversion, characterized in TSMC 0.18 µm with a 15 fF load on Q.',
        image: 'images/pipelined-adder-ltspice/ff-custom-schematic.png',
      },
      {
        title: 'Clock-to-Q Measurement',
        caption:
          'ff_custom_tcq_tb.asc: D, CLK, and Q over 6 ns. Conservative tcq of 143.4 ps taken from the rising-edge clock-to-Q delay.',
        image: 'images/pipelined-adder-ltspice/ff-tcq.jpg',
      },
      {
        title: 'Setup-Time Sweep',
        caption:
          'ff_custom_setup_sweep.asc: data-edge sweep relative to the clock. Setup time is the smallest passing offset under a 10% tcq-degradation rule — 80 ps.',
        image: 'images/pipelined-adder-ltspice/ff-setup-sweep.jpg',
      },
      {
        title: 'Hold-Time Sweep',
        caption:
          'ff_custom_hold_sweep.asc: negative hold sweep. −60 ps still passes and −70 ps fails, so thold is reported as −60 ps.',
        image: 'images/pipelined-adder-ltspice/ff-hold-sweep.jpg',
      },
      {
        title: 'Transient Timing Simulation',
        caption:
          'Registered-output latency check. B0r changes after the first active clock edge; C1 and S01 appear one stage later; S1 and C2 appear one more cycle later. Total pipeline latency is 2 clock cycles.',
        image: 'images/pipelined-adder-ltspice/timing-simulation.jpg',
      },
      {
        title: 'Frequency Sweep Results',
        caption:
          'Clock period decreased until outputs stopped behaving correctly. Smallest cleanly passing period is 0.6 ns (1.67 GHz, 1.67 Gresults/s). The 0.5 ns case showed degraded output swing and was treated as failing.',
        image: 'images/pipelined-adder-ltspice/frequency-sweep.jpg',
      },
    ],
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/nishadelias/2-stage-pipelined-adder-ltspice',
      },
      {
        label: 'Design Report (PDF)',
        url: 'https://github.com/nishadelias/2-stage-pipelined-adder-ltspice/blob/main/report.pdf',
      },
      {
        label: 'Pipelined Adder Schematic',
        url: 'https://github.com/nishadelias/2-stage-pipelined-adder-ltspice/blob/main/pipelined_adder.asc',
      },
      {
        label: 'Frequency Sweep Testbench',
        url: 'https://github.com/nishadelias/2-stage-pipelined-adder-ltspice/blob/main/pipelined_adder_freq_sweep.asc',
      },
    ],
  },
  {
    slug: 'fpga-flappy-bird',
    name: 'FPGA Flappy Bird',
    shortDescription:
      'A Flappy Bird clone implemented in Verilog on a Basys3 FPGA, with VGA 640×480 graphics, pushbutton controls, and a 7-segment score display.',
    image: 'images/fpga-flappy-bird/thumbnail.svg',
    githubUrl: 'https://github.com/nishadelias/FPGA_Flappy_Bird',
    overview: [
      'This project is a hardware implementation of Flappy Bird on a Digilent Basys3 FPGA board. The entire game — graphics, physics, collision detection, scoring, and display multiplexing — runs in synthesizable Verilog with no soft-core processor.',
      'A VGA controller generates 640×480 video at 25 MHz from the board\'s 100 MHz clock, drawing a bird sprite, scrolling pillars with randomized gap positions, and a simple sky background. Pushbuttons handle flap, pause, and reset; the score is shown on the board\'s 7-segment display with multiplexed digit refresh.',
      'The design is split into modular blocks: a clock divider for pixel and display clocks, a VGA rasterizer with game-state logic, and a 7-segment controller that shows the live score and game-over state. It is an end-to-end digital design project from RTL through Xilinx constraints to a playable demo on real hardware.',
    ],
    techStack: [
      'Verilog',
      'Xilinx Vivado',
      'Basys3 FPGA',
      'VGA 640×480',
      '7-Segment Display',
      'Clock Division',
    ],
    videoWalkthroughIntro:
      'A gameplay demo of the finished project running on the Basys3 board with VGA output.',
    videoSections: [
      {
        number: 1,
        title: 'Gameplay Demo',
        suggestedTitle: 'FPGA Flappy Bird — Basys3 VGA Gameplay Demo',
        summary:
          'A screen recording of the completed game: flap through scrolling pillars, watch the score increment on the 7-segment display, and see game-over reset behavior — all rendered directly from the FPGA with no host PC involved.',
      },
    ],
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/nishadelias/FPGA_Flappy_Bird',
      },
      {
        label: 'Top-Level Module (top.v)',
        url: 'https://github.com/nishadelias/FPGA_Flappy_Bird/blob/main/top.v',
      },
      {
        label: 'VGA Controller (vga640x480.v)',
        url: 'https://github.com/nishadelias/FPGA_Flappy_Bird/blob/main/vga640x480.v',
      },
      {
        label: 'Xilinx Constraints (constraint.xdc)',
        url: 'https://github.com/nishadelias/FPGA_Flappy_Bird/blob/main/constraint.xdc',
      },
    ],
  },
  {
    slug: 'watches',
    name: 'Custom Watches',
    shortDescription:
      'A collection of watches I have built — each with photos and videos.',
    image: 'images/watches/skeleton/skeleton1-1.png',
    overview: [
      'These are watches I have built by hand. The gallery below shows each piece at a glance; click any watch to jump to its longer description, demo video, and photo pair.',
    ],
    techStack: [],
    watches: [
      {
        id: 'watch-1',
        name: 'Brunette Skeleton',
        shortDescription: '38.5mm Mosel - Brunette Skeleton vintage dress watch with Miyota 8N24 movement',
        overview: [
          'This is the first watch I ever built and it is sill my favorite to this day. I got the watch kit from DIY Watch Club, and would highly recommend building your first watch with one of their kits before trying to design your own. \
          The case is made out of SS316L Stainless Steel and has a 38.5mm case size, 20mm lug size, 45.5mm lug-to-lug, and a thickness of ~12.5mm including crystal. \
          Although this may seem thick, excluding the crystal, the watch is around 7.5mm thick, giving it a nice slim look on the wrist. \
          The crystal is a Sapphire High-domed K1 crystal with Anti-Reflective coating. The movement is a Miyota 8N24 movement.',
        ],
        image: 'images/watches/skeleton/skeleton1-1.png',
        photos: [
          {
            title: 'Front',
            image: 'images/watches/skeleton/skeleton1-1.png',
          },
          {
            title: 'Back',
            image: 'images/watches/skeleton/skeleton1-2.png',
          },
        ],
        videoTitle: 'Watch 1 — Build / Demo Video',
      },
      {
        id: 'watch-2',
        name: 'Silver Dress',
        shortDescription: '38.5mm Mosel with Date - Silver Vintage Dress Watch with Miyota 8215 movement',
        overview: [
          'The brown leather strap and silver sunray dial give this watch a really classy look. The watch is extremely similar to the Brunette Skeleton, but a second hand and a date window at the 3 o\'clock position. \
          The second hand was particulary difficult to install, as the hand is very thin and I didn\'t have a second hand installation tool. \
          The case is made out of SS316L Stainless Steel and has a 38.5mm case size, 20mm lug size, 45.5mm lug-to-lug, and a thickness of ~12.5mm including crystal. \
          Although this may seem thick, excluding the crystal, the watch is around 7.5mm thick, giving it a nice slim look on the wrist. \
          The crystal is a Sapphire High-domed K1 crystal with Anti-Reflective coating. The movement is a Miyota 8215 movement.',
        ],
        image: 'images/watches/dress1/dress1-1.png',
        photos: [
          {
            title: 'Front',
            image: 'images/watches/dress1/dress1-1.png',
          },
          {
            title: 'Back',
            image: 'images/watches/dress1/dress1-2.png',
          },
        ],
        videoTitle: 'Watch 2 — Build / Demo Video',
      },
      {
        id: 'watch-3',
        name: 'Black x Rose Gold Dress',
        shortDescription: '35mm Mosel - Black x Rose Gold Vintage Dress Watch with Miyota 82S0 movement',
        overview: [
          'With a case size of 35.5mm, this dress watch is a nice size for both men and women. It features an SS316L Stainless Steel case(PVD Black), Sapphire High-domed K1 crystal with Anti-Reflective coating. The lug size is 18mm, and Lug-to-lug is 42mm. \
          Similar to the other dress watches I\'ve built, this watch wears a lot slimmer on wrist than its true thickness of 12.5mm, as the case thickness is only 7.5mm excluding the crystal.',
        ],
        image: 'images/watches/dress2/dress2-1.png',
        photos: [
          {
            title: 'Front',
            image: 'images/watches/dress2/dress2-1.png',
          },
          {
            title: 'Back',
            image: 'images/watches//dress2/dress2-2.png',
          },
        ],
        videoTitle: 'Watch 3 — Build / Demo Video',
      },
    ],
    links: [],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
