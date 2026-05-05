"use client";

import { useState } from "react";

export function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert cm to m

    if (w > 0 && h > 0) {
      const bmiValue = w / (h * h);
      setBMI(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) setCategory("Kurus");
      else if (bmiValue < 25) setCategory("Normal");
      else if (bmiValue < 30) setCategory("Overweight");
      else setCategory("Obesitas");
    }
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setBMI(null);
    setCategory("");
  };

  return (
    <section id="bmi-calculator" className="py-32 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)]" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hitung BMI Kamu
          </h2>
          <p className="text-zinc-400 text-lg font-light">
            Cek kondisi tubuhmu dalam hitungan detik
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800">
            {/* Weight Input */}
            <div className="mb-6">
              <label htmlFor="weight" className="block text-sm font-medium text-zinc-400 mb-3">
                Berat Badan (kg)
              </label>
              <input
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Contoh: 70"
                className="w-full px-5 py-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/50 transition-colors"
              />
            </div>

            {/* Height Input */}
            <div className="mb-8">
              <label htmlFor="height" className="block text-sm font-medium text-zinc-400 mb-3">
                Tinggi Badan (cm)
              </label>
              <input
                id="height"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Contoh: 170"
                className="w-full px-5 py-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/50 transition-colors"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={calculateBMI}
                className="flex-1 py-4 px-6 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              >
                Hitung BMI
              </button>
              <button
                onClick={reset}
                className="py-4 px-6 bg-zinc-800 text-white font-semibold rounded-xl hover:bg-zinc-700 transition-colors"
              >
                Reset
              </button>
            </div>

            {/* Result */}
            {bmi !== null && (
              <div className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700">
                <div className="text-center">
                  <p className="text-zinc-400 text-sm mb-2">BMI Kamu</p>
                  <p className="text-5xl font-bold text-white mb-2">{bmi}</p>
                  <p
                    className={`text-lg font-semibold ${
                      category === "Normal"
                        ? "text-emerald-400"
                        : category === "Kurus"
                        ? "text-blue-400"
                        : category === "Overweight"
                        ? "text-orange-400"
                        : "text-red-400"
                    }`}
                  >
                    {category}
                  </p>
                </div>

                {/* BMI Categories Reference */}
                <div className="mt-6 pt-6 border-t border-zinc-700">
                  <p className="text-xs text-zinc-500 mb-3">Kategori BMI:</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Kurus:</span>
                      <span className="text-zinc-500">&lt; 18.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Normal:</span>
                      <span className="text-emerald-400">18.5 - 24.9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Overweight:</span>
                      <span className="text-orange-400">25 - 29.9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Obesitas:</span>
                      <span className="text-red-400">&gt; 30</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <p className="text-center text-zinc-500 text-sm mt-6">
            Hasil BMI adalah referensi. Konsultasikan dengan trainer kami untuk program yang tepat.
          </p>
        </div>
      </div>
    </section>
  );
}
