import React, { PropsWithChildren } from 'react';
import Styles from './Card.module.scss';
import { AvatarType, BasicSizeType } from '../../../types';
import { Flex } from '../Flex/Flex';
import { Image } from '../Image/Image';
import { CardCollapse } from '../Cards/CardCollapse/CardCollapse';

type classNamesCard = {
    card?: string;
    extra?: string;
    cover?: string;
    header?: string;
    headerWrapper?: string;
    body?: string;
    footer?: string;
    title?: string;
    description?: string;
    avatar?: string;
    active?: {
        card?: string;
        header?: string;
        headerWrapper?: string;
        body?: string;
        footer?: string;
        title?: string;
        avatar?: string;
    };
};
type CardProps = {
    className?: string;
    classNames?: classNamesCard;
    title?: string;
    description?: string | React.ReactNode;
    size?: BasicSizeType;
    avatar?: AvatarType;
    bordered?: boolean;
    cover?: React.ReactNode;
    extra?: React.ReactNode;
    actions?: React.ReactNode;
    style?: React.CSSProperties;
};

export const Card = ({
    className = '',
    classNames = {
        card: '',
        header: '',
        headerWrapper: '',
        body: '',
        footer: '',
        extra: '',
        title: '',
        description: '',
        avatar: '',
        cover: '',
    },
    size = 'middle',
    title,
    description,
    avatar,
    bordered = false,
    cover,
    extra,
    actions,
    style,
    children,
}: PropsWithChildren<CardProps>) => {
    const handleCheckHeaderCondition = () => {
        return title || extra || description || avatar;
    };

    const handleSetClassNamesCard = () => {
        const border = bordered ? Styles.bordered : '';
        const sizing = {
            small: Styles.smallCard,
            middle: Styles.middleCard,
            large: Styles.largeCard,
        };

        return [Styles.Card, sizing[size], border, className, classNames.card].join(' ');
    };

    const handleDisplayAvatar = () => {
        if (!avatar) return null;

        if (typeof avatar === 'object' && 'src' in avatar) {
            return (
                <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    size={avatar?.size}
                    bordered={avatar?.bordered}
                    className={`${Styles.avatar} ${classNames.avatar}`}
                />
            );
        }

        return avatar;
    };

    return (
        <div className={handleSetClassNamesCard()} style={{ ...style }}>
            {cover && <div className={`${Styles.cover} ${classNames.cover}`}>{cover}</div>}
            {handleCheckHeaderCondition() && (
                <Flex vertical className={`${Styles.header} ${classNames.header}`}>
                    <div className={`${Styles.headerWrapper} ${classNames.headerWrapper}`}>
                        {handleDisplayAvatar()}
                        <div className={Styles.details}>
                            <div className={`${Styles.title} ${classNames.title}`}>{title}</div>
                            {description && typeof description === 'string' ? (
                                <p className={`${Styles.description} ${classNames.description}`}>{description}</p>
                            ) : (
                                description
                            )}
                        </div>
                        {extra && (
                            <Flex gap={'small'} className={`${Styles.extra} ${classNames.extra}`}>
                                {extra}
                            </Flex>
                        )}
                    </div>
                </Flex>
            )}
            <Flex vertical justify="space-between" align="stretch" className={Styles.bodyWrapper}>
                <div className={`${Styles.body} ${classNames.body}`}>{children}</div>
                {actions && <div className={`${Styles.footer} ${classNames.footer}`}>{actions}</div>}
            </Flex>
        </div>
    );
};

// type classNamesCardCollapse = {
//     card?: string;
//     header?: string;
//     headerWrapper?: string;
//     body?: string;
//     footer?: string;
//     title?: string;
//     avatar?: string;
//     active?: {
//         card?: string;
//         header?: string;
//         headerWrapper?: string;
//         body?: string;
//         footer?: string;
//         title?: string;
//         avatar?: string;
//     };
// };
// type CardCollapseProps = {
//     className?: string;
//     classNames?: classNamesCardCollapse;
//     title?: string;
//     description?: string;
//     size?: {
//         card?: BasicSizeType;
//         avatar?: Size | number;
//     };
//     avatar?: AvatarType;
//     bordered?: boolean;
//     actions?: React.ReactNode;
//     expandIcon?: React.ReactNode;
//     expandIconPosition?: 'end' | 'start';
//     style?: React.CSSProperties;
//     variant?: 'collapse' | 'menu';
// };
// export const CardCollapse = ({
//     className = '',
//     classNames = {
//         card: '',
//         avatar: '',
//         header: '',
//         headerWrapper: '',
//         body: '',
//         footer: '',
//         title: '',
//         active: {
//             card: '',
//             avatar: '',
//             header: '',
//             headerWrapper: '',
//             body: '',
//             footer: '',
//             title: '',
//         },
//     },
//     title,
//     description,
//     bordered = false,
//     size = {
//         card: 'small',
//         avatar: 'small',
//     },
//     avatar,
//     actions,
//     expandIcon,
//     expandIconPosition = 'end',
//     variant = 'collapse',
//     style,
//     children,
// }: PropsWithChildren<CardCollapseProps>) => {
//     const [visible, setVisible] = useState<boolean>(false);
//     const cardRef = useRef<HTMLDivElement>(null);
//     const menuRef = useRef<HTMLDivElement>(null);

//     const [dropdownPosition, setDropdownPosition] = useState<CSSPosition>({ top: 45 });

//     const handleSetClassNamesCard = () => {
//         const border = bordered ? Styles.bordered : '';
//         const sizing = {
//             small: Styles.smallCardCollapse,
//             middle: Styles.middleCardCollapse,
//             large: Styles.largeCardCollapse,
//         };

//         return [Styles.CardCollapse, size?.card ? sizing[size.card] : '', border, className, classNames.card].join(' ');
//     };

//     const handleDisplayAvatar = () => {
//         if (!avatar) return null;

//         if (typeof avatar === 'object' && 'src' in avatar) {
//             return (
//                 <Image
//                     src={avatar.src}
//                     alt={avatar.alt}
//                     size={avatar?.size}
//                     bordered={avatar?.bordered}
//                     className={`${Styles.avatar} ${classNames.avatar}`}
//                 />
//             );
//         }

//         return avatar;
//     };

//     const handleVisible = () => {
//         setVisible((prev) => !prev);
//     };

//     const displayVariantContent = () => {
//         const current = {
//             collapse: (
//                 <div className={`${classNames.body} ${Styles.wrapper} ${visible ? Styles.isVisible : ''}`}>
//                     <div className={`${Styles.inner}`}>
//                         <div>{children}</div>
//                         {actions && <div className={`${Styles.footer} ${classNames.footer}`}>{actions}</div>}
//                     </div>
//                 </div>
//             ),
//             menu: visible ? (
//                 <>
//                     <Backdrop onCancel={() => setVisible(false)} />
//                     <Flex
//                         vertical
//                         align="stretch"
//                         gap={4}
//                         className={`${Styles.menu} ${classNames.body}`}
//                         ref={menuRef}
//                         style={{
//                             top: dropdownPosition.top && dropdownPosition.top,
//                             bottom: dropdownPosition.bottom && dropdownPosition.bottom,
//                         }}
//                     >
//                         {children}
//                     </Flex>
//                 </>
//             ) : null,
//         };

//         return current[variant];
//     };

//     useEffect(() => {
//         if (variant !== 'menu') return;
//         if (!cardRef.current || !menuRef?.current) return;

//         const handleResize = () => {
//             if (!cardRef.current || !menuRef?.current) return;
//             const container = cardRef.current.getBoundingClientRect();
//             const dropdown = menuRef?.current?.getBoundingClientRect();
//             const windowHeight = window.innerHeight;

//             if (dropdown.bottom >= windowHeight) {
//                 setDropdownPosition((prev) => ({
//                     ...prev,
//                     top: container.top - dropdown.height - container.height,
//                 }));
//             } else {
//                 setDropdownPosition((prev) => ({ ...prev, top: container.height }));
//             }
//         };
//         window.addEventListener('resize', handleResize);

//         handleResize();

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [cardRef?.current, variant]);

//     return (
//         <div className={handleSetClassNamesCard()} ref={cardRef} style={{ ...style }}>
//             <Flex vertical className={`${Styles.header} ${classNames.header}`} onClick={handleVisible}>
//                 <div
//                     className={`${Styles.headerWrapper} ${classNames.headerWrapper} ${
//                         visible ? classNames.active?.headerWrapper : ''
//                     }`}
//                     style={{
//                         display: 'flex',
//                         flexDirection: expandIconPosition === 'start' ? 'row-reverse' : 'row',
//                     }}
//                 >
//                     {handleDisplayAvatar()}
//                     <div className={Styles.details}>
//                         <div className={`${Styles.title} ${classNames.title}`}>{title}</div>
//                         {description && <p className={Styles.description}>{description}</p>}
//                     </div>
//                     {expandIcon ? (
//                         expandIcon
//                     ) : (
//                         <ChevronDownSVG
//                             style={
//                                 visible
//                                     ? {
//                                           transform: 'scaleY(-1)',
//                                           transition: 'transform 0.2s ease-in',
//                                       }
//                                     : {
//                                           transform: 'scaleY(1)',
//                                           transition: 'transform 0.2s ease-in',
//                                       }
//                             }
//                         />
//                     )}
//                 </div>
//             </Flex>
//             {displayVariantContent()}
//         </div>
//     );
// };

Card.Collapse = CardCollapse;
