"use client";

import type React from "react";

import { useState } from "react";
import {
  Upload,
  X,
  FileText,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MessageCircle,
  Sparkles,
} from "lucide-react";

type ProjectType = "upload" | "custom" | null;

interface UploadedFile {
  id: string;
  file: File;
  preview: string;
  selectedFilament: { type: string; color: string } | null;
  quantity: number;
}

const inStockFilaments = [
  {
    type: "PLA",
    colors: [
      { name: "Black", hex: "#1a1a1a", inStock: true },
      { name: "White", hex: "#ffffff", inStock: true, promo: true },
    ],
  },
  {
    type: "PETG",
    colors: [
      { name: "Black", hex: "#1a1a1a", inStock: true },
      { name: "White", hex: "#ffffff", inStock: true, promo: true },
    ],
  },
  {
    type: "TPU",
    colors: [
      { name: "Black", hex: "#1a1a1a", inStock: true },
      { name: "White", hex: "#ffffff", inStock: true },
    ],
  },
  {
    type: "ABS",
    colors: [
      { name: "Black", hex: "#1a1a1a", inStock: true },
      { name: "White", hex: "#ffffff", inStock: true },
    ],
  },
];

const allFilaments = [
  {
    type: "Silk PLA",
    colors: [
      { name: "Gold", hex: "#FFD700" },
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Copper", hex: "#B87333" },
      { name: "Blue", hex: "#4169E1" },
      { name: "Red", hex: "#DC143C" },
    ],
  },
  {
    type: "Nylon",
    colors: [
      { name: "Natural", hex: "#F5F5DC" },
      { name: "Black", hex: "#1a1a1a" },
    ],
  },
  {
    type: "ASA",
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "White", hex: "#ffffff" },
      { name: "Gray", hex: "#808080" },
    ],
  },
];

export default function StartProjectPage() {
  const [projectType, setProjectType] = useState<ProjectType>(null);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [showFilamentGuide, setShowFilamentGuide] = useState(false);
  const [showRequestFilament, setShowRequestFilament] = useState(false);
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null);

  // Contact form state
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactType, setContactType] = useState<"whatsapp" | "email">("email");
  const [customDesignDetails, setCustomDesignDetails] = useState("");

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFiles(files);
    }
  };

  const handleFiles = (files: File[]) => {
    const newFiles: UploadedFile[] = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      preview: URL.createObjectURL(file),
      selectedFilament: null,
      quantity: 1,
    }));
    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const removeFile = (id: string) => {
    setUploadedFiles(uploadedFiles.filter((f) => f.id !== id));
    if (selectedFileId === id) setSelectedFileId(null);
  };

  const updateFileFilament = (id: string, type: string, color: string) => {
    setUploadedFiles(
      uploadedFiles.map((f) =>
        f.id === id ? { ...f, selectedFilament: { type, color } } : f
      )
    );
  };

  const updateFileQuantity = (id: string, quantity: number) => {
    setUploadedFiles(
      uploadedFiles.map((f) =>
        f.id === id ? { ...f, quantity: Math.max(1, quantity) } : f
      )
    );
  };

  const handleSubmit = () => {
    if (projectType === "upload") {
      console.log("Submitting upload project:", uploadedFiles);
      alert("Project submitted! We'll contact you soon with a quote.");
    } else if (projectType === "custom") {
      console.log("Submitting custom design:", {
        email,
        phone,
        contactType,
        customDesignDetails,
      });
      alert("Custom design request submitted! We'll contact you soon.");
    }
  };

  return (
    <div className="min-h-screen bg-background pt-14">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-pixel text-5xl text-foreground mb-4">
            Start Your Project
          </h1>
          <p className="font-mono text-muted-foreground text-lg">
            Upload your design files or request a custom design
          </p>
        </div>

        {/* Project Type Selection */}
        {!projectType && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <button
              onClick={() => setProjectType("upload")}
              className="group relative p-8 rounded-2xl border-2 border-border bg-card hover:border-primary transition-all hover:shadow-lg"
            >
              <div className="absolute top-4 right-4">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-pixel text-2xl text-foreground mb-3">
                Upload Design Files
              </h2>
              <p className="font-mono text-sm text-muted-foreground">
                Have STL or 3DS files ready? Upload them and select your
                preferred filament and colors.
              </p>
            </button>

            <button
              onClick={() => setProjectType("custom")}
              className="group relative p-8 rounded-2xl border-2 border-border bg-card hover:border-secondary transition-all hover:shadow-lg"
            >
              <div className="absolute top-4 right-4">
                <FileText className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="font-pixel text-2xl text-foreground mb-3">
                Custom Design
              </h2>
              <p className="font-mono text-sm text-muted-foreground">
                Need a custom design? Share your requirements and we'll create
                it for you.
              </p>
            </button>
          </div>
        )}

        {/* Upload Design Flow */}
        {projectType === "upload" && (
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => setProjectType(null)}
              className="mb-6 px-4 py-2 rounded-full border border-border font-mono text-sm hover:bg-muted transition-colors"
            >
              ← Change Project Type
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: File Upload */}
              <div className="space-y-6">
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all ${
                    isDragging
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card"
                  }`}
                >
                  <Upload className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="font-pixel text-xl text-foreground mb-2">
                    Drop Files Here
                  </h3>
                  <p className="font-mono text-sm text-muted-foreground mb-4">
                    or click to browse (STL, 3DS, OBJ)
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".stl,.3ds,.obj"
                    onChange={handleFileInput}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>

                {/* Uploaded Files List */}
                {uploadedFiles.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-pixel text-xl text-foreground">
                      Uploaded Files ({uploadedFiles.length})
                    </h3>
                    {uploadedFiles.map((file) => (
                      <div
                        key={file.id}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          selectedFileId === file.id
                            ? "border-primary bg-primary/5"
                            : "border-border bg-card hover:border-muted-foreground"
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <p className="font-mono text-sm font-semibold text-foreground truncate">
                              {file.file.name}
                            </p>
                            <p className="font-mono text-xs text-muted-foreground">
                              {(file.file.size / 1024).toFixed(2)} KB
                            </p>
                          </div>
                          <button
                            onClick={() => removeFile(file.id)}
                            className="p-1 rounded-full hover:bg-destructive/10 text-destructive transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Filament Selection for this file */}
                        <button
                          onClick={() =>
                            setSelectedFileId(
                              selectedFileId === file.id ? null : file.id
                            )
                          }
                          className="w-full px-3 py-2 rounded-lg border border-border bg-background font-mono text-sm text-left hover:bg-muted transition-colors"
                        >
                          {file.selectedFilament
                            ? `${file.selectedFilament.type} - ${file.selectedFilament.color}`
                            : "Select Filament & Color"}
                        </button>

                        {selectedFileId === file.id && (
                          <div className="mt-3 p-3 rounded-lg bg-background border border-border space-y-3">
                            {inStockFilaments.map((filament) => (
                              <div
                                key={filament.type}
                                className="flex items-center gap-3"
                              >
                                <span className="font-pixel text-sm text-foreground w-16">
                                  {filament.type}
                                </span>
                                <div className="flex gap-2">
                                  {filament.colors.map((color) => (
                                    <button
                                      key={color.name}
                                      onClick={() =>
                                        updateFileFilament(
                                          file.id,
                                          filament.type,
                                          color.name
                                        )
                                      }
                                      className="group relative"
                                      title={`${filament.type} - ${color.name}`}
                                    >
                                      <div
                                        className={`w-8 h-8 rounded-full border-2 shadow-md transition-all ${
                                          file.selectedFilament?.type ===
                                            filament.type &&
                                          file.selectedFilament?.color ===
                                            color.name
                                            ? "border-primary scale-110"
                                            : "border-border hover:border-muted-foreground hover:scale-105"
                                        }`}
                                        style={{ backgroundColor: color.hex }}
                                      />
                                      {color.promo && (
                                        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-secondary animate-pulse" />
                                      )}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Quantity */}
                        <div className="mt-3 flex items-center gap-3">
                          <span className="font-mono text-sm text-muted-foreground">
                            Quantity:
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateFileQuantity(file.id, file.quantity - 1)
                              }
                              className="w-8 h-8 rounded-full border border-border hover:bg-muted transition-colors font-mono"
                            >
                              -
                            </button>
                            <span className="font-mono text-sm font-semibold w-8 text-center">
                              {file.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateFileQuantity(file.id, file.quantity + 1)
                              }
                              className="w-8 h-8 rounded-full border border-border hover:bg-muted transition-colors font-mono"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Filament Info */}
              <div className="space-y-6">
                {/* In Stock Filaments */}
                <div className="p-6 rounded-2xl border-2 border-border bg-card">
                  <h3 className="font-pixel text-xl text-foreground mb-4">
                    In Stock Filaments
                  </h3>
                  <div className="space-y-4">
                    {inStockFilaments.map((filament) => (
                      <div
                        key={filament.type}
                        className="flex items-center justify-between"
                      >
                        <span className="font-pixel text-base text-foreground">
                          {filament.type}
                        </span>
                        <div className="flex gap-2">
                          {filament.colors.map((color) => (
                            <div key={color.name} className="relative">
                              <div
                                className="w-10 h-10 rounded-full border-2 border-border shadow-md"
                                style={{ backgroundColor: color.hex }}
                                title={color.name}
                              />
                              {color.promo && (
                                <div className="absolute -top-1 -right-1 flex items-center gap-1">
                                  <Sparkles className="h-4 w-4 text-secondary animate-pulse" />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="font-mono text-xs text-muted-foreground mt-4">
                    <Sparkles className="h-3 w-3 inline text-secondary" /> = On
                    Special
                  </p>
                </div>

                {/* Filament Guide */}
                <div className="rounded-2xl border-2 border-border bg-card overflow-hidden">
                  <button
                    onClick={() => setShowFilamentGuide(!showFilamentGuide)}
                    className="w-full p-4 flex items-center justify-between hover:bg-muted transition-colors"
                  >
                    <span className="font-pixel text-lg text-foreground">
                      Choose the Right Filament
                    </span>
                    {showFilamentGuide ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                  {showFilamentGuide && (
                    <div className="p-4 border-t border-border space-y-4">
                      <div>
                        <h4 className="font-pixel text-sm text-primary mb-1">
                          PLA
                        </h4>
                        <p className="font-mono text-xs text-muted-foreground">
                          Best for: Prototypes, decorative items, low-stress
                          parts. Easy to print, biodegradable.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-pixel text-sm text-primary mb-1">
                          PETG
                        </h4>
                        <p className="font-mono text-xs text-muted-foreground">
                          Best for: Functional parts, outdoor use, food-safe
                          applications. Strong and durable.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-pixel text-sm text-primary mb-1">
                          TPU
                        </h4>
                        <p className="font-mono text-xs text-muted-foreground">
                          Best for: Flexible parts, phone cases, seals.
                          Rubber-like flexibility.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-pixel text-sm text-primary mb-1">
                          ABS
                        </h4>
                        <p className="font-mono text-xs text-muted-foreground">
                          Best for: High-temperature parts, automotive,
                          enclosures. Very strong and heat-resistant.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Request Different Filament */}
                <div className="rounded-2xl border-2 border-border bg-card overflow-hidden">
                  <button
                    onClick={() => setShowRequestFilament(!showRequestFilament)}
                    className="w-full p-4 flex items-center justify-between hover:bg-muted transition-colors"
                  >
                    <span className="font-pixel text-lg text-foreground">
                      Request Different Filament
                    </span>
                    {showRequestFilament ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                  {showRequestFilament && (
                    <div className="p-4 border-t border-border space-y-4">
                      <p className="font-mono text-xs text-muted-foreground mb-3">
                        Need a filament or color we don't have in stock? Select
                        from our full range below.
                      </p>
                      {allFilaments.map((filament) => (
                        <div key={filament.type}>
                          <h4 className="font-pixel text-sm text-foreground mb-2">
                            {filament.type}
                          </h4>
                          <div className="grid grid-cols-5 gap-2">
                            {filament.colors.map((color) => (
                              <div key={color.name} className="text-center">
                                <div
                                  className="w-10 h-10 rounded-full border-2 border-border shadow-md mx-auto mb-1"
                                  style={{ backgroundColor: color.hex }}
                                />
                                <p className="font-mono text-[10px] text-muted-foreground">
                                  {color.name}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                {uploadedFiles.length > 0 && (
                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 rounded-full bg-primary text-background font-pixel text-xl hover:shadow-lg hover:scale-105 transition-all"
                  >
                    Submit Project for Quote
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Custom Design Flow */}
        {projectType === "custom" && (
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setProjectType(null)}
              className="mb-6 px-4 py-2 rounded-full border border-border font-mono text-sm hover:bg-muted transition-colors"
            >
              ← Change Project Type
            </button>

            <div className="p-8 rounded-2xl border-2 border-border bg-card space-y-6">
              <h2 className="font-pixel text-2xl text-foreground">
                Custom Design Request
              </h2>

              {/* Design Details */}
              <div>
                <label className="block font-mono text-sm text-foreground mb-2">
                  Project Description
                </label>
                <textarea
                  value={customDesignDetails}
                  onChange={(e) => setCustomDesignDetails(e.target.value)}
                  placeholder="Describe what you need designed..."
                  className="w-full p-4 rounded-xl border-2 border-border bg-background font-mono text-sm resize-none focus:border-primary focus:outline-none transition-colors"
                  rows={6}
                />
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <h3 className="font-pixel text-lg text-foreground">
                  Contact Information
                </h3>

                <div>
                  <label className="block font-mono text-sm text-foreground mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-border bg-background font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-sm text-foreground mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-border bg-background font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Contact Type */}
                <div>
                  <label className="block font-mono text-sm text-foreground mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setContactType("email")}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        contactType === "email"
                          ? "border-primary bg-primary/10"
                          : "border-border bg-background hover:border-muted-foreground"
                      }`}
                    >
                      <Mail className="h-6 w-6 mx-auto mb-2" />
                      <span className="font-mono text-sm">Email</span>
                    </button>
                    <button
                      onClick={() => setContactType("whatsapp")}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        contactType === "whatsapp"
                          ? "border-primary bg-primary/10"
                          : "border-border bg-background hover:border-muted-foreground"
                      }`}
                    >
                      <MessageCircle className="h-6 w-6 mx-auto mb-2" />
                      <span className="font-mono text-sm">WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={!email || !phone || !customDesignDetails}
                className="w-full py-4 rounded-full bg-primary text-background font-pixel text-xl hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Submit Custom Design Request
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
