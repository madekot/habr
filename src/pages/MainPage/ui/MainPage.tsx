import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButtons } from 'app/providers/ErrorBoudary';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {/* <BugButtons /> */}
            {t('Главная страница')}
            {/* {t('Новый перевод')} */}
        </div>
    );
};

export default MainPage;
