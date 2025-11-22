"use client";

const CONTACT = {
  title: "Scientist",
  firstName: "Kelli",
  lastName: "Klus",
  phone: "216.233.6369",
  company: "Swell Skin",
  note: "Own who you are",
};

export default function Home() {
  const handleSaveContact = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N:${CONTACT.lastName};${CONTACT.firstName};;;`,
      `FN:${CONTACT.firstName} ${CONTACT.lastName}`,
      `TITLE:${CONTACT.title}`,
      `ORG:${CONTACT.company}`,
      `TEL;TYPE=CELL,VOICE:${CONTACT.phone}`,
      `NOTE:${CONTACT.note}`,
      "END:VCARD",
    ].join("\r\n");

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Kelli-Klus.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1500);

    const message = encodeURIComponent(
      "You are added to the Confidence Network. Can't wait to connect."
    );
    const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const smsLink = isiOS ? `sms:&body=${message}` : `sms:?body=${message}`;
    window.location.href = smsLink;
  };

  return (
    <div className="noise-surface relative flex min-h-screen items-center justify-center px-4 py-10 text-slate-100">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(122,255,0,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(122,255,0,0.1),transparent_35%)]" />
      <div className="relative w-full max-w-md">
        <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-[#7aff00] opacity-40 blur-3xl" />
        <div className="absolute -right-8 -bottom-12 h-24 w-24 rounded-full bg-[#7aff00] opacity-25 blur-3xl" />

        <main className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-gradient-to-br from-[#1e252d] via-[#141a20] to-[#0b0f14] card-depth">
          <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_40%)]" />
          <div className="relative flex flex-col gap-6 p-7">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-[#7aff00]/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#7aff00]">
                {CONTACT.title}
              </span>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-[#7aff00] shadow-[0_0_10px_rgba(122,255,0,0.7)]" />
                Always on
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700/60 bg-[#0f141b] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                Name
              </p>
              <p className="text-3xl font-semibold text-white leading-tight">
                {CONTACT.firstName} {CONTACT.lastName}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700/60 bg-[#11171e] p-5 accent-glow">
              <p className="text-sm text-slate-300">
                Tap below to save my contact and open a text - Android and iOS
                ready. You will see an automated note that you are added to the
                Confidence Network.
              </p>
            </div>

            <button
              onClick={handleSaveContact}
              className="group relative overflow-hidden rounded-2xl border border-[#7aff00]/60 bg-gradient-to-r from-[#1b1f25] via-[#1f262f] to-[#232d38] px-5 py-4 text-center text-lg font-semibold text-[#7aff00] transition-transform duration-150 ease-out animate-[jiggle_1.3s_ease-in-out_infinite] hover:scale-[1.015] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7aff00] accent-glow"
              aria-label="Save contact and open text message"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(122,255,0,0.6),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.18),transparent_30%)]" />
              <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#7aff00] to-transparent opacity-60" />
              Save contact + text me
            </button>
          </div>
        </main>

        <footer className="mt-4 text-center text-sm text-slate-400">
          <div>Built in America, on earth.</div>
          <div className="italic">
            Making relationships built to last, the American Way.
          </div>
        </footer>
      </div>
    </div>
  );
}
