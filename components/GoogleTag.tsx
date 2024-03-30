import Script from "next/script";
export const GoogleTag = () => {
    return (
        <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10907606786">
            </script>
            {/* @ts-ignore */}
            <script>
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'AW-10907606786');
                `}
            </script>
        </>
    );
}
