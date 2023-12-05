import { FC, FormEvent, useEffect, useState } from 'react';
import { isNaN } from 'lodash';

import HeaderBackground from '../../../assets/images/HeaderBackground.png';
import { Page } from '../../../layouts';
import { axios } from '../../../utils/customAxios';

interface State {
  fileTypes: Record<string, boolean>;
  monthlyQuota: number;
  provisionDate: number;
  maximumFileSize: number;
}

const Settings: FC = () => {
  const [settings, setSettings] = useState<State>({
    fileTypes: {},
    monthlyQuota: 0,
    provisionDate: 1,
    maximumFileSize: 1,
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    axios
      .get<State>('/settings')
      .then(({ data }) => setSettings(data))
      .catch((e) => console.error(e));
  }, []);

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSaving(true);
    axios
      .post('/settings', settings)
      .catch((error) => console.error(error))
      .finally(() => setIsSaving(false));
  };

  if (!settings) return null;

  return (
    <Page title='Settings'>
      <nav className='relative w-full bg-green-900'>
        <h1 className='select-none px-10 py-5 text-2xl/normal font-semibold text-white'>
          Settings
        </h1>
        <img className='absolute right-0 top-0 h-full w-auto' src={HeaderBackground} />
      </nav>

      <main className='p-10'>
        <form className='flex flex-col gap-y-6' onSubmit={handleSave}>
          <div className='flex flex-col gap-y-4'>
            <h2 className='text-xl/normal font-semibold text-[#1F2937]'>Permitted File Types</h2>
            <div className='grid grid-cols-5 gap-y-3'>
              {Object.keys(settings.fileTypes).map((fileType: keyof State['fileTypes']) => (
                <div key={fileType} className='flex flex-row gap-x-2'>
                  <input
                    id={`${fileType}-checkbox`}
                    type='checkbox'
                    name={fileType}
                    disabled={isSaving}
                    checked={settings.fileTypes[fileType]}
                    className='checkbox-success checkbox'
                    onChange={(e) => {
                      setSettings((prev) => ({
                        ...prev,
                        fileTypes: {
                          ...prev.fileTypes,
                          [fileType]: e.target.checked,
                        },
                      }));
                    }}
                  />
                  <label htmlFor={`${fileType}-checkbox`}>{fileType}</label>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-y-4'>
            <label
              htmlFor='monthly-quota-input'
              className='text-xl/lg font-semibold text-[#1F2937]'
            >
              Monthly Page Provision
            </label>
            <input
              type='text'
              id='monthly-quota-input'
              disabled={isSaving}
              className='shadow-[0_1px_2px_0_rgba(0,0,0,0.2) w-[320px] rounded-lg border border-[#E5E7EB] p-4 font-medium'
              value={settings.monthlyQuota}
              onChange={(e) => {
                if (isNaN(Number(e.target.value))) return;
                setSettings((prev) => ({
                  ...prev,
                  monthlyQuota: Number(e.target.value),
                }));
              }}
            />
          </div>

          <div className='flex flex-col gap-y-4'>
            <label
              htmlFor='provision-date-input'
              className='text-xl/lg font-semibold text-[#1F2937]'
            >
              Monthly Provision Date
            </label>
            <input
              type='text'
              id='provision-date-input'
              className='shadow-[0_1px_2px_0_rgba(0,0,0,0.2) w-[320px] rounded-lg border border-[#E5E7EB] p-4 font-medium'
              value={settings.provisionDate}
              disabled={isSaving}
              onChange={(e) => {
                if (isNaN(Number(e.target.value))) return;
                setSettings((prev) => ({
                  ...prev,
                  provisionDate: Number(e.target.value),
                }));
              }}
              onBlur={() => {
                if (settings.provisionDate < 1) {
                  setSettings((prev) => ({
                    ...prev,
                    provisionDate: 1,
                  }));
                }
                if (settings.provisionDate > 31) {
                  setSettings((prev) => ({
                    ...prev,
                    provisionDate: 31,
                  }));
                }
              }}
            />
          </div>

          <div className='flex flex-col gap-y-4'>
            <label htmlFor='max-size-input' className='text-xl/lg font-semibold text-[#1F2937]'>
              Maximum File Size (in megabytes)
            </label>
            <input
              type='text'
              id='max-size-input'
              className='shadow-[0_1px_2px_0_rgba(0,0,0,0.2) w-[320px] rounded-lg border border-[#E5E7EB] p-4 font-medium'
              value={settings.maximumFileSize}
              disabled={isSaving}
              onChange={(e) => {
                if (isNaN(Number(e.target.value))) return;
                setSettings((prev) => ({
                  ...prev,
                  maximumFileSize: Number(e.target.value),
                }));
              }}
              onBlur={() => {
                if (settings.maximumFileSize < 1) {
                  setSettings((prev) => ({
                    ...prev,
                    maximumFileSize: 1,
                  }));
                }
              }}
            />
          </div>

          <button className='btn btn-success mx-auto w-fit text-white' disabled={isSaving}>
            Save Changes
          </button>
        </form>
      </main>
    </Page>
  );
};

export default Settings;
