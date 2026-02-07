import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Col 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-playfair text-white mb-6">OPAL</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-6 font-light">
              The silent partner in hospitality excellence. enhancing guest
              experience through invisible perfection.
            </p>
            <div className="flex gap-4">
              {/* Placeholder Social Icons */}
              <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold/20 transition-colors flex items-center justify-center text-gold cursor-pointer">
                <span className="sr-only">LinkedIn</span>
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold/20 transition-colors flex items-center justify-center text-gold cursor-pointer">
                <span className="sr-only">Twitter</span>
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="col-span-1 md:col-span-1 md:ml-auto">
            <h4 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Our Standard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Legal
            </h4>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                +91-8447560065
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                partners@opal-hospitality.in
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                Delhi, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs font-light tracking-wide">
            &copy; {new Date().getFullYear()} OPAL Hospitality Services. All
            rights reserved.
          </p>
          <p className="text-white/20 text-xs font-light tracking-wide">
            Designed for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
