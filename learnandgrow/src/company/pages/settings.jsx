import {
  Button,
  Card,
  CardBody,
  Divider,
  Select,
  SelectItem,
  Switch,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { Bell, Key, Palette, Save, Shield } from "lucide-react";
import React, { useState } from "react";

export default function CompanySettings() {
  const [settings, setSettings] = useState({
    notifications: {
      emailAlerts: true,
      applicationUpdates: true,
      marketingEmails: false,
      desktopNotifications: true,
    },
    privacy: {
      profileVisibility: "public",
      showRevenue: false,
      showEmployeeCount: true,
    },
    appearance: {
      theme: "light",
      language: "english",
    },
    security: {
      twoFactorAuth: false,
      loginAlerts: true,
    },
  });

  const languages = [
    { label: "English", value: "english" },
    { label: "Spanish", value: "spanish" },
    { label: "French", value: "french" },
    { label: "German", value: "german" },
  ];

  const themes = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "System", value: "system" },
  ];

  const handleSettingChange = (category, setting, value) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value,
      },
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <Button color="primary" startContent={<Save size={16} />}>
          Save Changes
        </Button>
      </div>

      <Tabs
        aria-label="Settings tabs"
        variant="underlined"
        classNames={{
          tabList: "gap-6",
          cursor: "w-full bg-primary",
        }}
      >
        <Tab
          key="notifications"
          title={
            <div className="flex items-center gap-2">
              <Bell size={16} />
              <span>Notifications</span>
            </div>
          }
        >
          <Card className="mt-4">
            <CardBody className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Email Alerts</h3>
                  <p className="text-sm text-default-500">
                    Receive alerts for new applications
                  </p>
                </div>
                <Switch
                  isSelected={settings.notifications.emailAlerts}
                  onValueChange={(value) =>
                    handleSettingChange("notifications", "emailAlerts", value)
                  }
                />
              </div>
              <Divider />
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Application Updates</h3>
                  <p className="text-sm text-default-500">
                    Get notified about application status changes
                  </p>
                </div>
                <Switch
                  isSelected={settings.notifications.applicationUpdates}
                  onValueChange={(value) =>
                    handleSettingChange(
                      "notifications",
                      "applicationUpdates",
                      value
                    )
                  }
                />
              </div>
              <Divider />
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">
                    Desktop Notifications
                  </h3>
                  <p className="text-sm text-default-500">
                    Enable browser notifications
                  </p>
                </div>
                <Switch
                  isSelected={settings.notifications.desktopNotifications}
                  onValueChange={(value) =>
                    handleSettingChange(
                      "notifications",
                      "desktopNotifications",
                      value
                    )
                  }
                />
              </div>
            </CardBody>
          </Card>
        </Tab>

        <Tab
          key="privacy"
          title={
            <div className="flex items-center gap-2">
              <Shield size={16} />
              <span>Privacy</span>
            </div>
          }
        >
          <Card className="mt-4">
            <CardBody className="space-y-6">
              <Select
                label="Profile Visibility"
                value={settings.privacy.profileVisibility}
                onChange={(e) =>
                  handleSettingChange(
                    "privacy",
                    "profileVisibility",
                    e.target.value
                  )
                }
              >
                <SelectItem key="public" value="public">
                  Public
                </SelectItem>
                <SelectItem key="private" value="private">
                  Private
                </SelectItem>
                <SelectItem key="hidden" value="hidden">
                  Hidden
                </SelectItem>
              </Select>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">
                    Show Company Revenue
                  </h3>
                  <p className="text-sm text-default-500">
                    Display revenue information publicly
                  </p>
                </div>
                <Switch
                  isSelected={settings.privacy.showRevenue}
                  onValueChange={(value) =>
                    handleSettingChange("privacy", "showRevenue", value)
                  }
                />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Show Employee Count</h3>
                  <p className="text-sm text-default-500">
                    Display number of employees
                  </p>
                </div>
                <Switch
                  isSelected={settings.privacy.showEmployeeCount}
                  onValueChange={(value) =>
                    handleSettingChange("privacy", "showEmployeeCount", value)
                  }
                />
              </div>
            </CardBody>
          </Card>
        </Tab>

        <Tab
          key="appearance"
          title={
            <div className="flex items-center gap-2">
              <Palette size={16} />
              <span>Appearance</span>
            </div>
          }
        >
          <Card className="mt-4">
            <CardBody className="space-y-6">
              <Select
                label="Theme"
                value={settings.appearance.theme}
                onChange={(e) =>
                  handleSettingChange("appearance", "theme", e.target.value)
                }
              >
                {themes.map((theme) => (
                  <SelectItem key={theme.value} value={theme.value}>
                    {theme.label}
                  </SelectItem>
                ))}
              </Select>

              <Select
                label="Language"
                value={settings.appearance.language}
                onChange={(e) =>
                  handleSettingChange("appearance", "language", e.target.value)
                }
              >
                {languages.map((language) => (
                  <SelectItem key={language.value} value={language.value}>
                    {language.label}
                  </SelectItem>
                ))}
              </Select>
            </CardBody>
          </Card>
        </Tab>

        <Tab
          key="security"
          title={
            <div className="flex items-center gap-2">
              <Key size={16} />
              <span>Security</span>
            </div>
          }
        >
          <Card className="mt-4">
            <CardBody className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">
                    Two-Factor Authentication
                  </h3>
                  <p className="text-sm text-default-500">
                    Add an extra layer of security
                  </p>
                </div>
                <Switch
                  isSelected={settings.security.twoFactorAuth}
                  onValueChange={(value) =>
                    handleSettingChange("security", "twoFactorAuth", value)
                  }
                />
              </div>
              <Divider />
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Login Alerts</h3>
                  <p className="text-sm text-default-500">
                    Get notified of new login attempts
                  </p>
                </div>
                <Switch
                  isSelected={settings.security.loginAlerts}
                  onValueChange={(value) =>
                    handleSettingChange("security", "loginAlerts", value)
                  }
                />
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
