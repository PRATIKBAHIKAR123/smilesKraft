"use client";

// Head component for GTM script
export function GoogleTagManagerHead() {
  return (
    // eslint-disable-next-line @next/next/next-script-for-ga
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MLXPQJ8N');

        `,
      }}
    />
  );
}

// Body component for GTM noscript
export function GoogleTagManagerBody() {
  return (
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MLXPQJ8N"
height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>

  );
}

// Default export for backward compatibility
export default function GoogleTagManager() {
  return (
    <>
      <GoogleTagManagerHead />
      <GoogleTagManagerBody />
    </>
  );
}
