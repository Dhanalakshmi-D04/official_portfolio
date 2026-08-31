import React, { useEffect, useRef, useState } from "react";

const contributions = [
  {
    id: 1,
    repository: "https://github.com/nirs/kubectl-gather/pull/175",
    repositoryName: "nirs/kubectl-gather",
    technology: "Golang",
    icon: "GO",
    type: "Feature",
    title: "ci: Add go compatibility check",
    description:
      "Adds a go-compatibility CI job that builds the project against the minimum Go version declared in go.mod, with GOTOOLCHAIN=local, to catch standard-library leakage in production code.",
    pr: "#175",
    date: "30 days ago",
    status: "Merged",
  },
  {
    id: 2,
    repository: "https://github.com/nirs/kubectl-gather/pull/179",
    repositoryName: "nirs/kubectl-gather",
    technology: "Golang",
    icon: "GO",
    type: "Bug Fix",
    title: "Add spell checking to CI workflow and fix spelling errors",
    description:
      "This PR adds automated spell checking to the codebase and fixes existing spelling errors.",
    pr: "#179",
    date: "3 weeks ago",
    status: "Merged",
  },
  {
    id: 3,
    repository: "https://github.com/nirs/kubectl-gather/pull/180",
    repositoryName: "nirs/kubectl-gather",
    technology: "Golang",
    icon: "GO",
    type: "Feature",
    title: "lint: Add golines formatter and make fmt target",
    description:
      "Adds golines to the golangci-lint formatters so long lines and comments are wrapped automatically.",
    pr: "#180",
    date: "3 weeks ago",
    status: "Merged",
  },
  {
    id: 4,
    repository: "https://github.com/bitfield/script/pull/245",
    repositoryName: "bitfield/script",
    technology: "Golang",
    icon: "GO",
    type: "Feature",
    title: "Add Shell method for running commands via the system shell",
    description:
      "Adds a new Shell method and package-level Shell function that runs a command line through the operating system's native shell.",
    pr: "#245",
    date: "2 weeks ago",
    status: "Merged",
  },
  {
    id: 5,
    repository: "https://github.com/RamenDR/ramenctl/issues/422",
    repositoryName: "RamenDR/ramenctl",
    technology: "Golang",
    icon: "GO",
    type: "Validating Test",
    title: "validate tests: Use golden yaml reports",
    description:
      "Updates validation tests to use golden YAML files for expected status.",
    pr: "#422",
    date: "3 weeks ago",
    status: "Merged",
  },
  {
    id: 6,
    repository: "https://github.com/RamenDR/ramenctl/pull/511",
    repositoryName: "RamenDR/ramenctl",
    technology: "Golang",
    icon: "GO",
    type: "Documentation",
    title: "pkg/report: add godoc comments for struct fields",
    description:
      "Adds godoc comments above exported struct fields.",
    pr: "#511",
    date: "1 day ago",
    status: "Open",
  },
  {
    id: 7,
    repository: "https://github.com/nirs/kubectl-gather/pull/181",
    repositoryName: "nirs/kubectl-gather",
    technology: "Golang",
    icon: "GO",
    type: "Fix",
    title: "build: remove version from the executable",
    description:
      "Removes the version from release asset names.",
    pr: "#181",
    date: "2 weeks ago",
    status: "Open",
  },
  {
    id: 8,
    repository: "https://github.com/nirs/kubectl-gather/pull/185",
    repositoryName: "nirs/kubectl-gather",
    technology: "Golang",
    icon: "GO",
    type: "Fix",
    title: "lint: forbid os.Exit and log.Fatal in pkg/",
    description:
      "Adds forbidigo to .golangci.yaml, forbidding os.Exit() and log.Fatal() calls in library code.",
    pr: "#185",
    date: "2 weeks ago",
    status: "Open",
  },
  {
    id: 9,
    repository: "https://github.com/nirs/kubectl-gather/pull/186",
    repositoryName: "nirs/kubectl-gather",
    technology: "Golang",
    icon: "GO",
    type: "Fix",
    title: "e2e: make commands.Run() more useful",
    description:
      "Changes commands.Run() to return a Result struct instead of a plain error, allowing tests to assert stderr output and exit codes.",
    pr: "#186",
    date: "2 weeks ago",
    status: "Open",
  },
  {
    id: 10,
    repository: "https://github.com/nirs/kubectl-gather/pull/188",
    repositoryName: "nirs/kubectl-gather",
    technology: "Golang",
    icon: "GO",
    type: "Fix",
    title: "Expose ResourceForKind() to addons",
    description:
      "Adds ResourceForKind(group, kind string) string to AddonBackend, allowing addons to resolve plural resource names dynamically.",
    pr: "#188",
    date: "2 weeks ago",
    status: "Open",
  },
];

/* ============================================================
   TECHNOLOGY LOGO
   ============================================================ */

const BrandLogo = ({ technology, icon }) => {
  const logoColors = {
    React: "#61DAFB",
    "Next.js": "#ffffff",
    "Node.js": "#68A063",
    Tailwind: "#38BDF8",
    Python: "#FFD43B",
    Go: "#00ADD8",
    Golang: "#00ADD8",
  };

  return (
    <div
      className="
        flex h-11 w-11 shrink-0 items-center justify-center
        rounded-full border border-white/[0.10]
        bg-white/[0.025]
      "
      style={{
        color: logoColors[technology] || "#F8F1EA",
      }}
    >
      <span className="text-xs font-medium">{icon}</span>
    </div>
  );
};

/* ============================================================
   GITHUB ICON
   ============================================================ */

const GitHubIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      aria-hidden="true"
      style={{
        display: "block",
        fill: "#090807",
        color: "#090807",
      }}
    >
      <path
        style={{ fill: "#090807" }}
        d="M12 0.5C5.65 0.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.1c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.15 1.17a10.93 10.93 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.74.11 3.03.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .3.21.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  );
};

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

const Spread = () => {
  const [selected, setSelected] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);

  // Important: reference to the internal contribution scroller
  const contributionScrollRef = useRef(null);

  /* ============================================================
     SCROLL REVEAL
     ============================================================ */

  useEffect(() => {
    const elements = document.querySelectorAll(".os-timeline-item");

    const observers = [];

    elements.forEach((element, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              if (prev.includes(index)) return prev;
              return [...prev, index];
            });

            observer.disconnect();
          }
        },
        {
          threshold: 0.15,
          root: contributionScrollRef.current,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  /* ============================================================
     INTERNAL CONTRIBUTION SCROLL
     
     This is the important part.

     The wheel event is captured BEFORE it bubbles up to
     the portfolio/page scrolling system.
     ============================================================ */

  const handleContributionWheel = (e) => {
    const container = contributionScrollRef.current;

    if (!container) return;

    const maxScroll =
      container.scrollHeight - container.clientHeight;

    const currentScroll = container.scrollTop;
    const delta = e.deltaY;

    const scrollingDown = delta > 0;
    const scrollingUp = delta < 0;

    const canScrollDown =
      scrollingDown && currentScroll < maxScroll;

    const canScrollUp =
      scrollingUp && currentScroll > 0;

    /*
      If the contribution feed can still move,
      consume the wheel event here.
    */
    if (canScrollDown || canScrollUp) {
      e.preventDefault();
      e.stopPropagation();

      container.scrollTop += delta;
    }
  };

  return (
    <section
      className="
        relative min-h-screen overflow-hidden
        bg-[#090807] text-white
      "
    >
      {/* ======================================================
          CUSTOM SCROLLBAR
      ====================================================== */}

      <style>{`
        .contribution-scroll::-webkit-scrollbar {
          width: 3px;
        }

        .contribution-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .contribution-scroll::-webkit-scrollbar-thumb {
          background: rgba(196, 156, 133, 0.35);
          border-radius: 999px;
        }

        .contribution-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(196, 156, 133, 0.65);
        }

        .contribution-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(196, 156, 133, 0.35) transparent;
        }

        /* Prevent scroll chaining */
        .contribution-scroll {
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>

      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* subtle grid */}

        <div
          className="
            absolute inset-0 opacity-[0.025]
            bg-[linear-gradient(rgba(248,241,234,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(248,241,234,.8)_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

        {/* warm subtle atmosphere */}

        <div
          className="
            absolute right-[5%] top-[15%]
            h-[600px] w-[600px]
            rounded-full
            bg-[#7B5A49]/[0.035]
            blur-[160px]
          "
        />

        <div
          className="
            absolute left-[15%] bottom-[5%]
            h-[400px] w-[400px]
            rounded-full
            bg-[#C49C85]/[0.015]
            blur-[140px]
          "
        />
      </div>

      {/* ======================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative z-10 mx-auto max-w-[1450px]
          px-6 py-20
          sm:px-10
          lg:px-16 lg:py-24
        "
      >
        <div
          className="
            grid gap-14
            lg:grid-cols-[0.72fr_1.28fr]
            lg:gap-20
            xl:grid-cols-[0.75fr_1.25fr]
          "
        >
          {/* ==================================================
              LEFT SIDE
          ================================================== */}

          <div className="lg:sticky lg:top-20 lg:self-start">
            {/* section number */}

            <div className="flex items-center gap-3">
              <span
                className="
                  font-mono text-xs
                  tracking-[0.3em]
                  text-[#C49C85]
                "
              >
                05 /
              </span>

              <span
                className="
                  font-mono text-xs uppercase
                  tracking-[0.25em]
                  text-[#7B5A49]
                "
              >
                Open Source
              </span>
            </div>

            {/* heading */}

            <h1
              className="
                mt-7
                text-[48px] font-semibold
                leading-[0.95]
                tracking-[-0.045em]
                sm:text-[60px]
                lg:text-[64px]
                xl:text-[70px]
              "
            >
              I don't just build.
              <br />

              <span className="text-[#C49C85]">
                I contribute.
              </span>
            </h1>

            {/* description */}

            <p
              className="
                mt-7 max-w-lg
                text-base leading-relaxed
                text-[#8D7D73]
                sm:text-lg
              "
            >
              Open-source is where I learn,
              collaborate, solve problems and
              give back to the developer community.
            </p>

            {/* ==================================================
                STATS
            ================================================== */}

            <div
              className="
                mt-9 grid max-w-lg grid-cols-3
                overflow-hidden rounded-xl
                border border-[#7B5A49]/20
              "
            >
              {/* PR */}

              <div
                className="
                  border-r border-[#7B5A49]/20
                  p-4 sm:p-5
                "
              >
                <div className="text-2xl text-[#F8F1EA] sm:text-3xl">
                  5
                </div>

                <div
                  className="
                    mt-2 text-[9px]
                    uppercase tracking-wider
                    text-[#7B5A49]
                    sm:text-[10px]
                  "
                >
                  PRs Merged
                </div>
              </div>

              {/* repositories */}

              <div
                className="
                  border-r border-[#7B5A49]/20
                  p-4 sm:p-5
                "
              >
                <div className="text-2xl text-[#F8F1EA] sm:text-3xl">
                  3
                </div>

                <div
                  className="
                    mt-2 text-[9px]
                    uppercase tracking-wider
                    text-[#7B5A49]
                    sm:text-[10px]
                  "
                >
                  Repositories
                </div>
              </div>

              {/* issues */}

              <div className="p-4 sm:p-5">
                <div className="text-2xl text-[#F8F1EA] sm:text-3xl">
                  10
                </div>

                <div
                  className="
                    mt-2 text-[9px]
                    uppercase tracking-wider
                    text-[#7B5A49]
                    sm:text-[10px]
                  "
                >
                  Issues
                </div>
              </div>
            </div>

            {/* ==================================================
                GITHUB CARD
            ================================================== */}

            <a
              href="https://github.com/Dhanalakshmi-D04"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative mt-6 block max-w-lg
                overflow-hidden rounded-xl
                border border-[#7B5A49]/25
                bg-[#100D0B]
                transition-all duration-500
                hover:-translate-y-1
                hover:border-[#C49C85]/50
                hover:bg-[#130F0D]
              "
            >
              {/* subtle accent */}

              <div
                className="
                  absolute left-0 top-0
                  h-full w-[2px]
                  bg-[#C49C85]
                  opacity-50
                  transition-all duration-500
                  group-hover:opacity-100
                "
              />

              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-5">
                  {/* GitHub icon */}

                  <div
  className="
    flex h-14 w-14 shrink-0
    items-center justify-center
    rounded-xl
    border border-[#7B5A49]/30
    bg-[#F8F1EA]
    transition-all duration-500
    group-hover:border-[#C49C85]/60
    group-hover:-rotate-3
  "
>
  <span
    className="
      font-mono text-xl font-bold
      tracking-[-0.12em]
      text-[#090807]
    "
  >
    &lt;/&gt;
  </span>
</div>

                  {/* content */}

                  <div className="min-w-0">
                    <p
                      className="
                        truncate text-base
                        font-medium text-[#E2CFC0]
                        sm:text-lg
                      "
                    >
                      github.com/Dhanalakshmi-D04
                    </p>

                    <p
                      className="
                        mt-1 text-sm
                        leading-relaxed
                        text-[#786960]
                      "
                    >
                      Explore my open-source work
                      and contributions
                    </p>
                  </div>
                </div>

                {/* bottom CTA */}

                <div className="mt-5 flex items-center justify-between">
                  <span
                    className="
                      font-mono text-[9px]
                      uppercase tracking-[0.25em]
                      text-[#594B44]
                    "
                  >
                    Open source profile
                  </span>

                  <span
                    className="
                      flex items-center gap-2
                      text-xs font-medium
                      text-[#C49C85]
                      transition-all duration-300
                      group-hover:gap-3
                    "
                  >
                    VIEW GITHUB
                    <span className="text-base">↗</span>
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* ==================================================
              RIGHT SIDE — SCROLLABLE CONTRIBUTION FEED
          ================================================== */}

          <div className="relative min-w-0">
            {/* timeline header */}

            <div
              className="
                mb-6 flex items-end
                justify-between
              "
            >
              <div>
                <p
                  className="
                    font-mono text-[10px]
                    uppercase tracking-[0.25em]
                    text-[#7B5A49]
                  "
                >
                  Contribution Log
                </p>

                <p className="mt-2 text-sm text-[#786960]">
                  Recent open-source activity
                </p>
              </div>

              <span
                className="
                  font-mono text-xs
                  text-[#C49C85]
                "
              >
                {contributions.length} contributions
              </span>
            </div>

            {/* ==================================================
                SCROLLABLE AREA

                IMPORTANT:
                onWheelCapture catches the wheel event before
                the event bubbles to the page.
            ================================================== */}

            <div
              ref={contributionScrollRef}
              className="
                contribution-scroll
                relative
                h-[520px]
                max-h-[520px]
                overflow-y-auto
                overscroll-contain
                touch-pan-y
                pr-3
                sm:h-[580px]
                sm:max-h-[580px]
                sm:pr-5
                lg:h-[620px]
                lg:max-h-[620px]
              "
              onWheelCapture={handleContributionWheel}
            >
              <div className="relative">
                {/* vertical timeline */}

                <div
                  className="
                    pointer-events-none
                    absolute bottom-0 left-[19px]
                    top-0 w-px
                    bg-gradient-to-b
                    from-[#C49C85]/60
                    via-[#7B5A49]/35
                    to-transparent
                    sm:left-[23px]
                  "
                />

                <div className="space-y-4">
                  {contributions.map((item, index) => {
                    const visible =
                      visibleItems.includes(index);

                    const isMerged =
                      item.status.toLowerCase() === "merged";

                    return (
                      <div
                        key={item.id}
                        className={`
                          os-timeline-item
                          relative pl-[50px]
                          transition-all
                          duration-700
                          sm:pl-[62px]
                          ${
                            visible
                              ? "translate-y-0 opacity-100"
                              : "translate-y-5 opacity-0"
                          }
                        `}
                        style={{
                          transitionDelay: `${Math.min(
                            index * 60,
                            400
                          )}ms`,
                        }}
                      >
                        {/* timeline node */}

                        <div
                          className="
                            absolute left-[10px]
                            top-[25px] z-10
                            flex h-[19px] w-[19px]
                            items-center justify-center
                            rounded-full
                            border border-[#C49C85]/60
                            bg-[#090807]
                            sm:left-[14px]
                          "
                        >
                          <div
                            className="
                              h-2 w-2 rounded-full
                              bg-[#C49C85]
                            "
                          />
                        </div>

                        {/* ==================================================
                            CONTRIBUTION CARD
                        ================================================== */}

                        <button
                          type="button"
                          onClick={() => setSelected(item)}
                          className="
                            group w-full
                            rounded-xl
                            border border-[#7B5A49]/20
                            bg-[#100D0B]
                            text-left
                            transition-all duration-300
                            hover:-translate-y-[2px]
                            hover:border-[#C49C85]/40
                            hover:bg-[#15110F]
                          "
                        >
                          <div
                            className="
                              flex items-center
                              gap-4 p-4
                              sm:gap-5 sm:p-5
                            "
                          >
                            {/* technology */}

                            <BrandLogo
                              technology={item.technology}
                              icon={item.icon}
                            />

                            {/* main content */}

                            <div className="min-w-0 flex-1">
                              <div
                                className="
                                  flex flex-wrap
                                  items-center
                                  gap-x-3 gap-y-1
                                "
                              >
                                <h3
                                  className="
                                    truncate
                                    text-sm font-medium
                                    text-[#E2CFC0]
                                    transition
                                    group-hover:text-[#F8F1EA]
                                    sm:text-base
                                  "
                                >
                                  {item.repositoryName}
                                </h3>

                                <span
                                  className="
                                    rounded
                                    bg-[#7B5A49]/10
                                    px-2 py-1
                                    font-mono text-[9px]
                                    text-[#9C8678]
                                  "
                                >
                                  {item.pr}
                                </span>

                                <span
                                  className="
                                    rounded
                                    bg-[#7B5A49]/10
                                    px-2 py-1
                                    text-[9px]
                                    text-[#9C8678]
                                  "
                                >
                                  {item.technology}
                                </span>
                              </div>

                              <p
                                className="
                                  mt-1.5
                                  truncate
                                  text-xs
                                  text-[#695C55]
                                  transition
                                  group-hover:text-[#8D7D73]
                                  sm:text-sm
                                "
                              >
                                {item.title}
                              </p>
                            </div>

                            {/* status */}

                            <div
                              className="
                                hidden shrink-0
                                text-right
                                sm:block
                              "
                            >
                              <p
                                className={`
                                  text-[10px]
                                  ${
                                    isMerged
                                      ? "text-[#C49C85]"
                                      : "text-[#786960]"
                                  }
                                `}
                              >
                                {isMerged
                                  ? "✓ merged"
                                  : "○ open"}
                              </p>

                              <p
                                className="
                                  mt-1 text-[9px]
                                  text-[#5F514A]
                                "
                              >
                                {item.date}
                              </p>
                            </div>

                            {/* arrow */}

                            <span
                              className="
                                hidden text-[#5F514A]
                                transition-all
                                group-hover:translate-x-1
                                group-hover:text-[#C49C85]
                                sm:block
                              "
                            >
                              →
                            </span>
                          </div>
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* timeline bottom */}

                <div
                  className="
                    mt-7 ml-[50px]
                    border-t
                    border-[#7B5A49]/10
                    pt-5
                    sm:ml-[62px]
                  "
                >
                  <div
                    className="
                      flex items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        font-mono text-[9px]
                        uppercase tracking-[0.25em]
                        text-[#594B44]
                      "
                    >
                      End of current activity
                    </span>

                    <span className="text-[#C49C85]/50">
                      ↓
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* scroll hint */}

            <div
              className="
                pointer-events-none
                mt-4 flex items-center
                justify-end gap-2
                font-mono text-[9px]
                uppercase tracking-[0.2em]
                text-[#594B44]
              "
            >
              <span>Scroll inside contributions</span>

              <span className="text-[#C49C85]/70">
                ↓
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          CONTRIBUTION DETAILS MODAL
      ====================================================== */}

      {selected && (
        <div
          className="
            fixed inset-0 z-[999]
            flex items-center justify-center
            bg-black/80 px-5
            backdrop-blur-md
          "
          onClick={() => setSelected(null)}
        >
          <div
            className="
              relative w-full max-w-xl
              rounded-2xl
              border border-[#7B5A49]/30
              bg-[#100D0B]
              p-6
              sm:p-8
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* close */}

            <button
              type="button"
              onClick={() => setSelected(null)}
              className="
                absolute right-5 top-5
                flex h-8 w-8
                items-center justify-center
                rounded-full
                border border-[#7B5A49]/30
                text-[#786960]
                transition
                hover:border-[#C49C85]/40
                hover:text-[#F8F1EA]
              "
            >
              ×
            </button>

            {/* header */}

            <div className="flex items-center gap-4">
              <BrandLogo
                technology={selected.technology}
                icon={selected.icon}
              />

              <div className="min-w-0">
                <p
                  className="
                    truncate text-sm
                    text-[#E2CFC0]
                  "
                >
                  {selected.repositoryName}
                </p>

                <p
                  className="
                    mt-1 font-mono
                    text-[10px]
                    text-[#695C55]
                  "
                >
                  {selected.pr} · {selected.date}
                </p>
              </div>
            </div>

            {/* title */}

            <h2
              className="
                mt-8 text-2xl
                font-medium
                tracking-tight
                text-[#F8F1EA]
                sm:text-3xl
              "
            >
              {selected.title}
            </h2>

            {/* description */}

            <p
              className="
                mt-4
                text-sm leading-relaxed
                text-[#8D7D73]
                sm:text-base
              "
            >
              {selected.description}
            </p>

            {/* tags */}

            <div className="mt-6 flex flex-wrap gap-2">
              <span
                className="
                  rounded-full
                  bg-[#7B5A49]/10
                  px-3 py-1.5
                  text-xs text-[#9C8678]
                "
              >
                {selected.technology}
              </span>

              <span
                className="
                  rounded-full
                  bg-[#7B5A49]/10
                  px-3 py-1.5
                  text-xs text-[#9C8678]
                "
              >
                {selected.type}
              </span>

              <span
                className={`
                  rounded-full
                  px-3 py-1.5
                  text-xs
                  ${
                    selected.status.toLowerCase() === "merged"
                      ? "bg-[#C49C85]/10 text-[#C49C85]"
                      : "bg-[#7B5A49]/10 text-[#9C8678]"
                  }
                `}
              >
                {selected.status.toLowerCase() === "merged"
                  ? "✓ Merged"
                  : "○ Open"}
              </span>
            </div>

            {/* actions */}

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={selected.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center
                  gap-2 rounded-lg
                  border border-[#C49C85]/30
                  bg-[#C49C85]/5
                  px-5 py-3
                  text-sm
                  text-[#C49C85]
                  transition
                  hover:border-[#C49C85]/60
                  hover:bg-[#C49C85]/10
                "
              >
                View contribution
                <span>↗</span>
              </a>

              <button
                type="button"
                onClick={() => setSelected(null)}
                className="
                  inline-flex items-center
                  rounded-lg
                  border border-[#7B5A49]/30
                  px-5 py-3
                  text-sm
                  text-[#786960]
                  transition
                  hover:border-[#C49C85]/40
                  hover:text-[#F8F1EA]
                "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Spread;