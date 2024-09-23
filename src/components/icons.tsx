import type { SVGProps } from 'react';
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import {
    Mail, 
    Monitor, 
    X, 
    Menu, 
    Eye, 
    EyeOff, 
    Clipboard, 
    ClipboardCheck, 
    Trash, 
    ClipboardPen, 
    CloudDownload, 
    Plus,
    GraduationCap,
    Send,
    HardHat,
    RotateCcw,
    Bell,
    ChevronLeft,
    ChevronRight,
    Phone,
    MapPin,
    ArrowUpRight,
    CircleCheck,
    CircleX
} from 'lucide-react';

export const Icons = {
    logo: GraduationCap,
    close: X,
    burgerMenu: Menu,
    sun: SunIcon,
    moon: MoonIcon,
    monitor: Monitor,
    mail: Mail,
    send: Send,
    eye: Eye,
    eyeOff: EyeOff,
    clipboard: Clipboard,
    clipboardCheck: ClipboardCheck,
    trash: Trash,
    edit: ClipboardPen,
    download: CloudDownload,
    add: Plus,
    construction:HardHat,
    reload:RotateCcw,
    bell: Bell,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    phone: Phone,
    location: MapPin,
    externLink: ArrowUpRight,
    circleCheck: CircleCheck,
    circleX: CircleX,
    file: (props: SVGProps<SVGSVGElement>) => (
        <svg 
            aria-hidden="true"
            focusable="false"
            data-icon="file"
            role="img"
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em" 
            viewBox="0 0 24 24" 
            {...props}
        >
            <path fill="currentColor" d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
        </svg>
    ),
    github: (props: SVGProps<SVGSVGElement>) => (
        <svg 
            aria-hidden="true"
            focusable="false"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em" 
            viewBox="0 0 24 24" 
            {...props}
        >
            <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path>
        </svg>
    ),
    linkedin: (props: SVGProps<SVGSVGElement>) => (
        <svg 
            aria-hidden="true"
            focusable="false"
            data-icon="linkedin"
            role="img"
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em" 
            viewBox="0 0 24 24" 
            {...props}
        >
            <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
        </svg>
    ),
    medium: (props: SVGProps<SVGSVGElement>) => (
        <svg 
            aria-hidden="true"
            focusable="false"
            data-icon="medium"
            role="img"
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em" 
            viewBox="0 0 24 24" 
            {...props}
        >
            <path fill="currentColor" fillRule="evenodd" d="M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082m9.64 5.898l.84-.803V8h-2.902l-2.069 5.16L9.927 8H6.883v.177l.98 1.18a.4.4 0 0 1 .133.343v4.641a.53.53 0 0 1-.142.46l-1.104 1.34v.175h3.127v-.176l-1.103-1.338a.55.55 0 0 1-.152-.46v-4.014l2.745 5.989h.32l2.357-5.989v4.773c0 .127 0 .151-.084.235l-.848.823v.176h4.117v-.176l-.818-.804a.25.25 0 0 1-.094-.235V9.215a.25.25 0 0 1 .094-.235" clipRule="evenodd"></path>
        </svg>
    ),
    contactSketch: (props: SVGProps<SVGSVGElement>) => (
        <svg 
            width="400px" height="300px" 
            viewBox="-150 -99 1230 1022" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}
        >
            <path d="M436.612844,783.873989 C383.646464,1018.56651 721.019595,913.998104 845.173614,771.175243 C969.327632,628.352383 1062.8876,382.230412 980.489795,310.603094 C947.305347,281.756293 855.841203,313.393833 782.453276,334.918921 C762.737736,340.701598 647.28515,389.857308 620.73246,284.637931 C613.357636,255.413983 684.801981,108.205582 678.469226,4.83555972 C674.811257,-54.8737311 640.6213,-101.236496 562.120181,-98.4819349 C432.84531,-93.9457513 336.174606,42.3294163 261.018224,135.816995 C211.526825,197.379713 160.232117,228.107983 154.506663,233.912672 C103.126466,286.003925 194.073335,-151.19202 -57.3286154,47.7276753 C-100.69372,82.0399523 -290.558853,254.241782 -187.455608,545.707939 C-168.397037,599.585276 -34.1223694,378.890577 -92.7241774,609.425338 C-151.325985,839.960099 -77.3777541,854.175414 -49.1572726,855.085459 C182.866272,862.567681 310.654632,621.150197 393.96853,604.731975 C484.706615,586.850709 437.18152,781.354203 436.612844,783.873989" id="Oval-3" stroke="none" fill="#ECF5FD" fillRule="evenodd"></path><g id="Group-4" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(309.607565, 246.015556)"><g id="Group" transform="translate(219.949939, 206.152341)"><rect id="Rectangle" fill="#C45C29" x="0" y="0" width="51.9438969" height="207.775588"></rect><polyline id="Path-2" fill="#9D442E" points="0.423450417 43.4042126 43.827663 0 0 5.36734073e-15 0 43.4042126"></polyline></g><g id="Group-2"><path d="M209.358451,207.159511 L415.552485,207.210454 L415.801615,90.0805128 C415.801615,90.0805128 415.552485,0.352910154 330.165128,0.0604725468 L107.548569,0.352910154 C107.548569,0.352910154 28.0867597,9.32633809 26.2852539,92.0527975 L26.2852539,207.00888 C26.2852539,207.00888 -47.3581603,346.027515 53.0707655,361.443917 C153.499691,376.86032 195.838426,245.591888 207.274305,208.138509" id="Path" fill="#DD5149"></path><path d="M208.188164,207.511499 L205.66206,82.4502236 C205.66206,82.4502236 205.679141,48.7904447 180.99674,24.9616992 C170.012526,14.3573803 151.7979,4.36510328 132.324212,1.32491429 C69.0915993,-8.54682046 40.9713602,39.9843818 40.9713602,39.9843818 C40.9713602,39.9843818 24.4633041,59.9760928 25.1832043,101.217271 L25.9031045,207.511499 L208.188164,207.511499 Z" id="Path-3" fill="#C0342B"></path><path d="M272.705459,142.034093 L272.705459,95.0174105 L272.705459,72.1195338 C272.705459,67.7005456 276.28148,64.1182478 280.713973,64.1182478 L342.61279,64.1182478 C347.03577,64.1182478 350.621304,67.6961155 350.621304,72.1195338 L350.621304,95.0748844 C350.621304,99.4938727 347.045283,103.07617 342.61279,103.07617 L298.677407,103.07617 L298.677407,142.034093 L303.660984,142.034093 C308.080586,142.034093 311.663382,145.618113 311.663382,150.038457 L311.663382,160.001678 C311.663382,164.422366 308.072573,168.006042 303.660984,168.006042 L267.721882,168.006042 C263.30228,168.006042 259.719485,164.422022 259.719485,160.001678 L259.719485,150.038457 C259.719485,145.617769 263.310293,142.034093 267.721882,142.034093 L272.705459,142.034093 Z" id="Combined-Shape" fill="#EBBE4C"></path></g><g id="Group-3" transform="translate(75.480975, 73.046105)"><polygon id="Rectangle-5" fill="#D8D9D9" points="129.859742 0 134.289561 127.424872 -4.4298182 127.424872 1.15463195e-14 0"></polygon><rect id="Rectangle-6" fill="#B9B9BC" x="25.9719485" y="22.4441536" width="64.9298712" height="34.7522379" rx="8"></rect><rect id="Rectangle-7" fill="#B9B9BC" x="25.9719485" y="69.5044757" width="64.9298712" height="11.5840793" rx="5.79203964"></rect></g><path d="M147.715457,4.86974034 C147.715457,4.86974034 171.579726,10.2345093 189.234803,35.6507535 C195.86833,45.2003785 202.660924,57.2239502 205.477747,73.3753864 L211.33563,207.463746 L202.334855,207.874349 L197.938857,73.3753864 C197.938857,73.3753864 187.849736,38.6466143 179.525544,27.7498049 C170.408027,15.8282166 147.715457,4.86974034 147.715457,4.86974034 Z" id="Path-4" fill="#9D442E"></path></g>
            </svg>
    )
}