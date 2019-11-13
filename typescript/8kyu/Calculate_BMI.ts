// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// Solution(1):
export function bmi(weight: number, height: number): string {

    let bmiTotal = (weight / (height * height))
    if (bmiTotal <= 18.5) {
        return "Underweight"
    }
    if (bmiTotal <= 25.0) {
        return "Normal"
    }
    if (bmiTotal <= 30.0) {
        return "Overweight"
    }
    if (bmiTotal > 30) {
        return "Obese"
    }

    throw new Error("The method or operation is not implemented.");
}