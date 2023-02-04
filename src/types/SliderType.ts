type SliderType = {
    id: number;
    bgImage: string;
    text: string;
    aText: string;
    aHref: string;
    textColor: string;
    aTextColor: string;
    bg: string;
    position: {
        top: string | 'unset';
        bottom: string | 'unset';
        left: string | 'unset';
        right: string | 'unset';
    };
}

export default SliderType;