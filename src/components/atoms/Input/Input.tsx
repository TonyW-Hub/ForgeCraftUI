import React, { PropsWithChildren, forwardRef, useState } from 'react';
import Styles from './Input.module.scss';
import { Alert } from '../Alert/Alert';
import { Flex } from '../Flex/Flex';
import { Size } from '../../../types';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    rules?: {
        pattern?: string | RegExp;
        errors?: {
            type: string;
            message?: string;
        }[];
    };
    variant?: 'default' | 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'danger' | 'success' | 'warning';
};

export const Input = (props: InputProps) => {
    const { className = '', rules, variant = 'default', onChange, ...rest } = props;
    const [errorPattern, setErrorPattern] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('Please input a correct value');

    const setVariant = () => {
        switch (variant) {
            case 'primary':
                return Styles.variantPrimary;

            default:
                return '';
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e) return;
        setErrorPattern(false);

        if (rules && rules.pattern && !new RegExp(rules.pattern).test(e?.currentTarget?.value)) {
            const checkPatternInRules = rules?.errors?.find((er) => er?.type === 'pattern');

            if (checkPatternInRules && checkPatternInRules.message) {
                setErrorMessage(checkPatternInRules.message);
            }

            setErrorPattern(true);
        }

        if (onChange) {
            onChange(e);
        }
    };

    return (
        <>
            <input
                {...rest}
                type="text"
                className={`${Styles.Input} ${className} ${setVariant()}`}
                onChange={handleChange}
            />
            {errorPattern && <Alert type="error">{errorMessage}</Alert>}
        </>
    );
};

const acceptTypeImage = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml'];

const InputDropZone = (props: InputProps) => {
    const { className = '', rules, onChange, ...rest } = props;
    const [dropzoneFile, setDropzoneFile] = useState<string>('Pas de fichier sélectionné');
    const [dragOver, setDragOver] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('Please input a correct file');
    const [errorType, setErrorType] = useState<boolean>(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (errorType) setErrorType(false);

        const fileList = e.target.files;
        if (fileList && fileList.length > 0) {
            const isCorrectType = acceptTypeImage?.includes(fileList[0]?.type);
            if (isCorrectType) {
                setDropzoneFile(fileList[0]?.name);
            } else {
                const checkFileErrorMessage = rules?.errors?.find((er) => er?.type === 'file');
                if (checkFileErrorMessage && checkFileErrorMessage.message)
                    setErrorMessage(checkFileErrorMessage.message);
                setErrorType(true);
                return;
            }
        } else {
            setDropzoneFile('Pas de fichier sélectionné');
        }

        if (onChange) onChange(e);
    };

    const handleDragOver = (e: React.DragEvent<HTMLInputElement>) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragEnd = () => {
        setDragOver(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
            setDropzoneFile(e?.dataTransfer?.files[0]?.name);
        }

        if (dragOver) {
            setDragOver(false);
        }
    };

    return (
        <>
            <Flex
                className={`${Styles.DropZone} ${className} ${dragOver ? Styles.DropZoneHover : ''}`}
                justify="center"
                align="center"
                gap={10}
                vertical
            >
                <div className={Styles.DropZoneContent}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" x2="12" y1="3" y2="15" />
                    </svg>
                </div>
                <input
                    {...rest}
                    type="file"
                    accept={acceptTypeImage.join(' ')}
                    onChange={handleFileChange}
                    onDragOver={handleDragOver}
                    onDragEnd={handleDragEnd}
                    onDragLeave={handleDragEnd}
                    onDrop={handleDrop}
                />
                <p>{dropzoneFile}</p>
            </Flex>
            {errorType && <Alert type="error">{errorMessage}</Alert>}
        </>
    );
};

Input.DropZone = InputDropZone;

type InputSwitchProps = {
    name: string;
    classNames?: { main?: string; input?: string; label?: string };
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputSwitch = ({
    name,
    classNames = { main: '', input: '', label: '' },
    onChange = () => {},
}: InputSwitchProps) => {
    return (
        <div className={`${Styles.InputSwitch} ${classNames.main}`}>
            <input
                type="checkbox"
                name={name}
                id={name}
                className={`${Styles.switchCheckbox} ${classNames.input}`}
                onChange={onChange}
            />
            <label htmlFor={name} className={`${Styles.switchLabel} ${classNames.label}`}></label>
        </div>
    );
};

Input.Switch = InputSwitch;

type InputCheckboxProps = {
    name: string;
    classNames?: { wrapper?: string; input?: string; label?: string; children?: string; checkbox?: string };
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    size?: Size;
    animation?: 'wave' | 'none';
};

const InputCheckbox = forwardRef<HTMLInputElement, PropsWithChildren<InputCheckboxProps>>(
    (
        {
            classNames = { wrapper: '', label: '', checkbox: '', children: '', input: '' },
            name,
            size = 'small',
            onChange = () => {},
            animation = 'none',
            children,
        }: PropsWithChildren<InputCheckboxProps>,
        ref,
    ) => {
        const setClassNamesProps = () => {
            const sizing = {
                small: Styles.smallInputCheckbox,
                middle: Styles.middleInputCheckbox,
                large: Styles.largeInputCheckbox,
            };

            const inputAnimation = {
                none: '',
                wave: Styles.checkboxWave,
            };

            return [Styles.checkboxWrapper, sizing[size], inputAnimation[animation], classNames.wrapper].join(' ');
        };

        return (
            <div className={setClassNamesProps()}>
                <input
                    ref={ref}
                    type="checkbox"
                    id={name}
                    name={name}
                    className={`${Styles.inputCheckbox} ${classNames.input}`}
                    onChange={onChange}
                />
                <label htmlFor={name} className={`${Styles.labelCheckbox} ${classNames.label}`}>
                    <span className={`${Styles.customCheckbox} ${classNames.checkbox}`}>
                        <svg viewBox="0 0 12 10" height="10px" width="12px">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                    </span>
                    <span className={`${Styles.checkboxChildren} ${classNames.children}`}>{children}</span>
                </label>
            </div>
        );
    },
);

Input.Checkbox = InputCheckbox;
