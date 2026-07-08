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
      'This project is a transistor-level design and simulation of a 2-bit ripple-carry adder with two pipeline stages, built in LTspice using a TSMC 0.18 µm CMOS process. The goal was to improve clock frequency by cutting combinational depth per cycle through register boundaries and device sizing, rather than only optimizing a flat combinational path.',
      'The datapath uses custom sum and carry logic (SUM_custom and AOI-based carry), inverters, and custom D flip-flops (ff_custom) to form pipeline registers between stages. Hierarchical schematics keep the top-level adder readable and testable, with a single-stage baseline included for direct comparison.',
      'Simulations cover transient timing, frequency sweeps, and flip-flop setup, hold, and clock-to-Q characterization — the full loop from schematic hierarchy through process-aware SPICE to an operating point at roughly 1.67 GHz.',
    ],
    techStack: [
      'LTspice',
      'TSMC 0.18 µm CMOS',
      'Custom CMOS Logic',
      'D Flip-Flops',
      'Transient Simulation',
      'Setup/Hold Characterization',
    ],
    photoWalkthroughIntro:
      'Schematic captures and simulation results from the LTspice design.',
    photoSections: [
      {
        title: 'Top-Level Pipelined Adder Schematic',
        caption: 'Hierarchical 2-stage pipelined adder with custom sum, carry, and flip-flop blocks.',
        image: 'images/pipelined-adder-ltspice/pipelined-adder-schematic.png',
      },
      {
        title: 'Custom D Flip-Flop (ff_custom)',
        caption: 'Pipeline register cell used between combinational stages.',
        image: 'images/pipelined-adder-ltspice/ff-custom-schematic.png',
      },
      {
        title: 'Transient Timing Simulation',
        caption: 'Waveforms from pipelined_adder_timing.asc verifying pipeline behavior.',
        image: 'images/pipelined-adder-ltspice/timing-simulation.png',
      },
      {
        title: 'Frequency Sweep Results',
        caption: 'Operating-point exploration from pipelined_adder_freq_sweep.asc (~1.67 GHz).',
        image: 'images/pipelined-adder-ltspice/frequency-sweep.png',
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
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
