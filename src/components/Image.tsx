export interface ImageProps {
    src?: string;
    className?: string;
    custom?: any;
}
const tempSrc = 'https://taphoammo.net/img/post/khac-phuc-loi-acc-clone-khong-hien-thi-quy-tac-gia-hoac-quy-beta-tiktok-creator-fund_674624.png';

export default function Image({ className, custom }: ImageProps) {

    return (
        <div className={`bg-cover bg-center ${className}`} style={{backgroundImage: `url(${tempSrc})`, ...custom}}>
            <img src={tempSrc} hidden />
        </div>
    )
}
