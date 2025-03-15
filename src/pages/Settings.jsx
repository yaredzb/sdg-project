import { useState } from 'react';
import PageContainer from '../components/layout/PageContainer';
import Card from '../components/ui/Card';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    dataRefreshInterval: '30',
    theme: 'light',
    language: 'en'
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
  };
  
  return (
    <PageContainer>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>
        
        <Card>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="notifications"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={settings.notifications}
                  onChange={handleChange}
                />
                <span className="ml-2 text-gray-700">Enable notifications</span>
              </label>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Data Refresh Interval
              </label>
              <select
                name="dataRefreshInterval"
                className="form-select w-full p-2 border border-gray-300 rounded-md"
                value={settings.dataRefreshInterval}
                onChange={handleChange}
              >
                <option value="15">Every 15 minutes</option>
                <option value="30">Every 30 minutes</option>
                <option value="60">Every hour</option>
                <option value="manual">Manual refresh only</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Theme
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="theme"
                    value="light"
                    className="form-radio h-4 w-4 text-blue-600"
                    checked={settings.theme === 'light'}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-gray-700">Light</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="theme"
                    value="dark"
                    className="form-radio h-4 w-4 text-blue-600"
                    checked={settings.theme === 'dark'}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-gray-700">Dark</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="theme"
                    value="system"
                    className="form-radio h-4 w-4 text-blue-600"
                    checked={settings.theme === 'system'}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-gray-700">System Default</span>
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Language
              </label>
              <select
                name="language"
                className="form-select w-full p-2 border border-gray-300 rounded-md"
                value={settings.language}
                onChange={handleChange}
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                <option value="de">German</option>
              </select>
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save Settings
              </button>
            </div>
          </form>
        </Card>
      </div>
    </PageContainer>
  );
};

export default Settings;