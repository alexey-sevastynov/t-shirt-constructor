export const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setImageSrc: React.Dispatch<React.SetStateAction<string | null>>,
) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const result = e.target?.result as string;
        setImageSrc(result);
    };
    reader.readAsDataURL(file);
};
