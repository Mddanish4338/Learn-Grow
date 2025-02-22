import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Button,
  Avatar,
  Tabs,
  Tab,
  Textarea,
  Chip,
  Image,
} from "@nextui-org/react";
import {
  Building2,
  MapPin,
  Globe,
  Users,
  Mail,
  Phone,
  Briefcase,
  Facebook,
  Twitter,
  Linkedin,
  Camera,
  Edit2,
} from "lucide-react";

export default function CProfile() {
  const [selectedTab, setSelectedTab] = useState("about");
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "TechCorp Solutions",
    industry: "Information Technology",
    size: "500-1000 employees",
    location: "New York, NY",
    website: "www.techcorp.com",
    email: "careers@techcorp.com",
    phone: "+1 (555) 123-4567",
    about:
      "TechCorp Solutions is a leading provider of innovative technology solutions. We specialize in software development, cloud computing, and digital transformation services for enterprises worldwide.",
    benefits: [
      "Health Insurance",
      "401(k) Plan",
      "Remote Work Options",
      "Professional Development",
      "Flexible Hours",
      "Gym Membership",
    ],
    socialLinks: {
      facebook: "facebook.com/techcorp",
      twitter: "twitter.com/techcorp",
      linkedin: "linkedin.com/company/techcorp",
    },
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      // Save changes logic would go here
      console.log("Saving profile changes:", profile);
    }
  };

  const handleInputChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSocialChange = (platform, value) => {
    setProfile((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value,
      },
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header Card */}
      <Card className="w-full">
        <CardBody className="relative">
          {/* Cover Image */}
          <div className="relative h-48 rounded-lg overflow-hidden mb-16">
            <Image
              src="/api/placeholder/1200/400"
              alt="Company cover"
              classNames={{
                img: "object-cover w-full h-full",
              }}
            />
            <Button
              isIconOnly
              className="absolute top-4 right-4"
              variant="flat"
              size="sm"
            >
              <Camera size={16} />
            </Button>
          </div>

          {/* Profile Overview */}
          <div className="absolute top-32 left-6 flex items-end gap-4">
            <Avatar
              className="w-24 h-24 text-large"
              src="/api/placeholder/150/150"
            />
            <div className="mb-2">
              <h1 className="text-2xl font-bold">{profile.name}</h1>
              <p className="text-default-500">{profile.industry}</p>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <Button
              color={isEditing ? "success" : "primary"}
              variant="flat"
              startContent={isEditing ? undefined : <Edit2 size={16} />}
              onClick={handleEditToggle}
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* Main Content */}
      <Tabs
        selectedKey={selectedTab}
        onSelectionChange={setSelectedTab}
        variant="underlined"
        classNames={{
          tabList: "gap-6",
          cursor: "w-full bg-primary",
        }}
      >
        <Tab
          key="about"
          title={
            <div className="flex items-center gap-2">
              <Building2 size={16} />
              <span>About</span>
            </div>
          }
        >
          <Card className="mt-4">
            <CardBody className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Input
                    label="Company Name"
                    value={profile.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    readOnly={!isEditing}
                    variant="bordered"
                    startContent={
                      <Building2 className="text-default-400" size={16} />
                    }
                  />
                  <Input
                    label="Location"
                    value={profile.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    readOnly={!isEditing}
                    variant="bordered"
                    startContent={
                      <MapPin className="text-default-400" size={16} />
                    }
                  />
                  <Input
                    label="Website"
                    value={profile.website}
                    onChange={(e) =>
                      handleInputChange("website", e.target.value)
                    }
                    readOnly={!isEditing}
                    variant="bordered"
                    startContent={
                      <Globe className="text-default-400" size={16} />
                    }
                  />
                </div>
                <div className="space-y-4">
                  <Input
                    label="Company Size"
                    value={profile.size}
                    onChange={(e) => handleInputChange("size", e.target.value)}
                    readOnly={!isEditing}
                    variant="bordered"
                    startContent={
                      <Users className="text-default-400" size={16} />
                    }
                  />
                  <Input
                    label="Email"
                    value={profile.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    readOnly={!isEditing}
                    variant="bordered"
                    startContent={
                      <Mail className="text-default-400" size={16} />
                    }
                  />
                  <Input
                    label="Phone"
                    value={profile.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    readOnly={!isEditing}
                    variant="bordered"
                    startContent={
                      <Phone className="text-default-400" size={16} />
                    }
                  />
                </div>
              </div>

              <Textarea
                label="About Company"
                value={profile.about}
                onChange={(e) => handleInputChange("about", e.target.value)}
                readOnly={!isEditing}
                variant="bordered"
                minRows={4}
              />

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Employee Benefits
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.benefits.map((benefit, index) => (
                    <Chip key={index} variant="flat" color="primary">
                      {benefit}
                    </Chip>
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>

        <Tab
          key="jobs"
          title={
            <div className="flex items-center gap-2">
              <Briefcase size={16} />
              <span>Active Jobs</span>
            </div>
          }
        >
          <Card className="mt-4">
            <CardBody>
              <div className="text-center py-8 text-default-500">
                No active job postings
              </div>
            </CardBody>
          </Card>
        </Tab>

        <Tab
          key="social"
          title={
            <div className="flex items-center gap-2">
              <Globe size={16} />
              <span>Social</span>
            </div>
          }
        >
          <Card className="mt-4">
            <CardBody className="space-y-4">
              <Input
                label="Facebook"
                value={profile.socialLinks.facebook}
                onChange={(e) => handleSocialChange("facebook", e.target.value)}
                readOnly={!isEditing}
                variant="bordered"
                startContent={
                  <Facebook className="text-default-400" size={16} />
                }
              />
              <Input
                label="Twitter"
                value={profile.socialLinks.twitter}
                onChange={(e) => handleSocialChange("twitter", e.target.value)}
                readOnly={!isEditing}
                variant="bordered"
                startContent={
                  <Twitter className="text-default-400" size={16} />
                }
              />
              <Input
                label="LinkedIn"
                value={profile.socialLinks.linkedin}
                onChange={(e) => handleSocialChange("linkedin", e.target.value)}
                readOnly={!isEditing}
                variant="bordered"
                startContent={
                  <Linkedin className="text-default-400" size={16} />
                }
              />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
