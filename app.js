// ==================== SERVICE WORKER REGISTRATION ====================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('SW registered'))
            .catch(err => console.log('SW registration failed'));
    });
}

// ==================== I18N / TRANSLATIONS ====================
const translations = {
    ar: {
        subtitle: "احسبها... وافهمها",
        explain_btn: "اشرح لي الطريقة",
        demo_title: "أمثلة سريعة",
        solution_method: "طريقة الحل",
        tab_mental: "الحساب الذهني",
        tab_visual: "الطريقة البصرية",
        step_indicator: "الخطوة {current} من {total}",
        practice_mode: "وضع التدريب",
        score: "النقاط:",
        level1: "المستوى 1", level1_desc: "جمع بسيط",
        level2: "المستوى 2", level2_desc: "طرح",
        level3: "المستوى 3", level3_desc: "جمع وطرح",
        level4: "المستوى 4", level4_desc: "ضرب",
        level5: "المستوى 5", level5_desc: "قسمة",
        challenge: "تحدي", challenge_desc: "مختلط",
        press_start: 'اضغط "ابدأ" للبدء',
        answer_placeholder: "أجب هنا",
        check: "تحقق", start: "ابدأ",
        history_title: "📜 سجل العمليات",
        clear_history: "مسح السجل",
        no_history: "لا توجد عمليات بعد",
        settings_title: "الإعدادات",
        theme_label: "الوضع", theme_toggle: "فاتح / داكن",
        speed_label: "سرعة العرض الافتراضية",
        speed_slow: "بطيء", speed_normal: "عادي", speed_fast: "سريع", speed_veryfast: "سريع جداً",
        btn_ac: "AC", btn_del: "DEL", btn_percent: "%",
        install_text: "تثبيت MindCalc على جهازك؟",
        install_yes: "تثبيت", install_no: "لاحقاً",
        correct: "✅ إجابة صحيحة! أحسنت!",
        wrong: "❌ خطأ! الإجابة الصحيحة هي {answer}",
        error_div_zero: "لا يمكن القسمة على صفر",
        error_empty: "أدخل عملية حسابية",
        error_invalid: "إدخال غير صالح",
        error_parens: "أقواس غير متوازنة",
        error_expr: "تعبير غير صالح",
        error_calc: "خطأ في الحساب",
        clear_confirm: "هل أنت متأكد من مسح السجل؟",
        complement_to_ten: "تكملة العشرة",
        decompose_addition: "تفكيك الأرقام",
        decompose_subtraction: "الطرح بالتفكيك",
        direct_subtraction: "الطرح المباشر",
        distributive_multiplication: "الضرب بالتوزيع",
        friendly_numbers: "الأعداد المألوفة",
        multiply_by_10: "الضرب في 10",
        decompose_division: "تفكيك القسمة",
        direct_division: "القسمة المباشرة",
        direct_calculation: "الحساب المباشر",
        complete_to_10: "نكمل {a} إلى 10:",
        split_b: "قسمنا {b} إلى: {comp} + {rem}",
        so_result: "إذن: 10 + {rem} = {sum}",
        result_is: "النتيجة = {result}",
        decompose_nums: "نفكك الأرقام:",
        a_equals: "{a} = {tens} + {ones}",
        add_tens: "نبدأ بجمع العشرات: {aTens} + {bTens} = {sum}",
        add_ones: "جمع الآحاد: {aOnes} + {bOnes} = {sum}",
        ones_split: "{onesSum} = {onesTens} + {onesRem}",
        add_results: "نضيف: {part1} + {part2} = {result}",
        then_add: "ثم: {part1} + {part2} = {result}",
        decompose_b: "نفكك {b}:",
        subtract_tens: "نطرح العشرات أولاً:",
        subtract_ones: "ثم نطرح الآحاد:",
        multiply_each: "نضرب كل جزء على حدة:",
        multiply_by_10_adds: "الضرب في 10 يضيف صفراً:",
        divide_each: "نقسم كل جزء على {b}:",
        divide_direct: "{a} ÷ {b} = {result}",
        subtract_direct: "{a} - {b} = {result}",
        multiply_direct: "{a} × {b} = {result}",
        add_direct: "{a} + {b} = {result}",
    },
    en: {
        subtitle: "Calculate... and Understand",
        explain_btn: "Explain the Method",
        demo_title: "Quick Examples",
        solution_method: "Solution Method",
        tab_mental: "Mental Math",
        tab_visual: "Visual Method",
        step_indicator: "Step {current} of {total}",
        practice_mode: "Practice Mode",
        score: "Score:",
        level1: "Level 1", level1_desc: "Simple Addition",
        level2: "Level 2", level2_desc: "Subtraction",
        level3: "Level 3", level3_desc: "Add & Subtract",
        level4: "Level 4", level4_desc: "Multiplication",
        level5: "Level 5", level5_desc: "Division",
        challenge: "Challenge", challenge_desc: "Mixed",
        press_start: 'Press "Start" to begin',
        answer_placeholder: "Your answer",
        check: "Check", start: "Start",
        history_title: "📜 History",
        clear_history: "Clear History",
        no_history: "No operations yet",
        settings_title: "Settings",
        theme_label: "Theme", theme_toggle: "Light / Dark",
        speed_label: "Default Playback Speed",
        speed_slow: "Slow", speed_normal: "Normal", speed_fast: "Fast", speed_veryfast: "Very Fast",
        btn_ac: "AC", btn_del: "DEL", btn_percent: "%",
        install_text: "Install MindCalc on your device?",
        install_yes: "Install", install_no: "Later",
        correct: "✅ Correct! Well done!",
        wrong: "❌ Wrong! The correct answer is {answer}",
        error_div_zero: "Cannot divide by zero",
        error_empty: "Enter a calculation",
        error_invalid: "Invalid input",
        error_parens: "Mismatched parentheses",
        error_expr: "Invalid expression",
        error_calc: "Calculation error",
        clear_confirm: "Are you sure you want to clear history?",
        complement_to_ten: "Complement to Ten",
        decompose_addition: "Number Decomposition",
        decompose_subtraction: "Decomposed Subtraction",
        direct_subtraction: "Direct Subtraction",
        distributive_multiplication: "Distributive Multiplication",
        friendly_numbers: "Friendly Numbers",
        multiply_by_10: "Multiply by 10",
        decompose_division: "Decomposed Division",
        direct_division: "Direct Division",
        direct_calculation: "Direct Calculation",
        complete_to_10: "Let's complete {a} to 10:",
        split_b: "We split {b} into: {comp} + {rem}",
        so_result: "So: 10 + {rem} = {sum}",
        result_is: "Result = {result}",
        decompose_nums: "Decompose the numbers:",
        a_equals: "{a} = {tens} + {ones}",
        add_tens: "Add the tens: {aTens} + {bTens} = {sum}",
        add_ones: "Add the ones: {aOnes} + {bOnes} = {sum}",
        ones_split: "{onesSum} = {onesTens} + {onesRem}",
        add_results: "Add: {part1} + {part2} = {result}",
        then_add: "Then: {part1} + {part2} = {result}",
        decompose_b: "Decompose {b}:",
        subtract_tens: "Subtract the tens first:",
        subtract_ones: "Then subtract the ones:",
        multiply_each: "Multiply each part separately:",
        multiply_by_10_adds: "Multiplying by 10 adds a zero:",
        divide_each: "Divide each part by {b}:",
        divide_direct: "{a} ÷ {b} = {result}",
        subtract_direct: "{a} - {b} = {result}",
        multiply_direct: "{a} × {b} = {result}",
        add_direct: "{a} + {b} = {result}",
    }
};

class I18N {
    constructor() {
        this.currentLang = localStorage.getItem('mindcalc_lang') || 'ar';
        this.applyLanguage();
    }
    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('mindcalc_lang', lang);
        this.applyLanguage();
    }
    toggleLanguage() {
        const newLang = this.currentLang === 'ar' ? 'en' : 'ar';
        this.setLanguage(newLang);
    }
    get(key, replacements = {}) {
        let text = translations[this.currentLang][key] || translations['en'][key] || key;
        for (const [k, v] of Object.entries(replacements)) text = text.replace(`{${k}}`, v);
        return text;
    }
    applyLanguage() {
        const html = document.getElementById('html-root');
        html.setAttribute('lang', this.currentLang);
        html.setAttribute('dir', this.currentLang === 'ar' ? 'rtl' : 'ltr');
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[this.currentLang][key]) el.textContent = translations[this.currentLang][key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[this.currentLang][key]) el.placeholder = translations[this.currentLang][key];
        });
        const langIcon = document.getElementById('lang-icon');
        if (langIcon) langIcon.textContent = this.currentLang === 'ar' ? 'EN' : 'AR';
        const subtitle = document.querySelector('.subtitle');
        if (subtitle) subtitle.textContent = this.get('subtitle');
    }
}
const i18n = new I18N();

// ==================== MATH ENGINE ====================
class MathEngine {
    constructor() {
        this.operators = {
            '+': { precedence: 1, associativity: 'left', func: (a, b) => a + b },
            '-': { precedence: 1, associativity: 'left', func: (a, b) => a - b },
            '×': { precedence: 2, associativity: 'left', func: (a, b) => a * b },
            '*': { precedence: 2, associativity: 'left', func: (a, b) => a * b },
            '÷': { precedence: 2, associativity: 'left', func: (a, b) => { if (b === 0) throw new Error('division_by_zero'); return a / b; }},
            '/': { precedence: 2, associativity: 'left', func: (a, b) => { if (b === 0) throw new Error('division_by_zero'); return a / b; }},
            '%': { precedence: 2, associativity: 'left', func: (a, b) => a % b }
        };
    }
    tokenize(expr) {
        const tokens = [];
        let i = 0;
        expr = expr.replace(/\s+/g, '');
        while (i < expr.length) {
            const char = expr[i];
            if (char >= '0' && char <= '9' || char === '.') {
                let num = '';
                while (i < expr.length && (expr[i] >= '0' && expr[i] <= '9' || expr[i] === '.')) { num += expr[i]; i++; }
                tokens.push({ type: 'number', value: parseFloat(num) });
            } else if (char in this.operators) { tokens.push({ type: 'operator', value: char }); i++; }
            else if (char === '(') { tokens.push({ type: 'lparen', value: char }); i++; }
            else if (char === ')') { tokens.push({ type: 'rparen', value: char }); i++; }
            else { throw new Error('invalid_input'); }
        }
        return tokens;
    }
    toPostfix(tokens) {
        const output = [];
        const stack = [];
        for (const token of tokens) {
            if (token.type === 'number') output.push(token);
            else if (token.type === 'operator') {
                const op1 = token.value;
                while (stack.length > 0) {
                    const top = stack[stack.length - 1];
                    if (top.type === 'operator') {
                        const op2 = top.value;
                        if ((this.operators[op1].associativity === 'left' && this.operators[op1].precedence <= this.operators[op2].precedence) ||
                            (this.operators[op1].associativity === 'right' && this.operators[op1].precedence < this.operators[op2].precedence)) {
                            output.push(stack.pop()); continue;
                        }
                    }
                    break;
                }
                stack.push(token);
            } else if (token.type === 'lparen') stack.push(token);
            else if (token.type === 'rparen') {
                while (stack.length > 0 && stack[stack.length - 1].type !== 'lparen') output.push(stack.pop());
                if (stack.length === 0) throw new Error('mismatched_parens');
                stack.pop();
            }
        }
        while (stack.length > 0) {
            const token = stack.pop();
            if (token.type === 'lparen') throw new Error('mismatched_parens');
            output.push(token);
        }
        return output;
    }
    evaluatePostfix(postfix) {
        const stack = [];
        for (const token of postfix) {
            if (token.type === 'number') stack.push(token.value);
            else if (token.type === 'operator') {
                if (stack.length < 2) throw new Error('invalid_expression');
                const b = stack.pop(), a = stack.pop();
                stack.push(this.operators[token.value].func(a, b));
            }
        }
        if (stack.length !== 1) throw new Error('invalid_expression');
        return stack[0];
    }
    evaluate(expr) {
        if (!expr || expr.trim() === '') throw new Error('empty_expression');
        const tokens = this.tokenize(expr);
        if (tokens.length === 0) throw new Error('empty_expression');
        const postfix = this.toPostfix(tokens);
        const result = this.evaluatePostfix(postfix);
        if (!isFinite(result)) throw new Error('invalid_result');
        return Math.round(result * 1000000000) / 1000000000;
    }
    isWholeNumber(n) { return Number.isInteger(n); }
    formatNumber(n) { return Number.isInteger(n) ? n.toString() : n.toFixed(6).replace(/\.?0+$/, ''); }
    getDisplayOp(op) { const map = { '*': '×', '/': '÷', '+': '+', '-': '-', '%': '%' }; return map[op] || op; }
    parseBinaryExpression(expr) {
        const clean = expr.replace(/\s+/g, '');
        const match = clean.match(/^(-?\d+\.?\d*)([\+\-\×\*\÷\/%])(-?\d+\.?\d*)$/);
        if (!match) return null;
        return { a: parseFloat(match[1]), op: match[2], b: parseFloat(match[3]) };
    }
}
const mathEngine = new MathEngine();

// ==================== STRATEGY ENGINE ====================
class StrategyEngine {
    constructor() {
        this.strategies = [
            this.complementToTen, this.decomposeAddition, this.decomposeSubtraction,
            this.distributiveMultiplication, this.friendlyNumberMultiplication,
            this.decompositionDivision, this.directCalculation
        ];
    }
    analyze(expr) {
        const parsed = mathEngine.parseBinaryExpression(expr);
        if (!parsed) return this.directCalculation.analyze(expr);
        const { a, op, b } = parsed;
        const displayOp = mathEngine.getDisplayOp(op);
        let bestStrategy = null, bestScore = -1;
        for (const strategy of this.strategies) {
            const result = strategy.call(this, a, op, b, displayOp);
            if (result && result.score > bestScore) { bestScore = result.score; bestStrategy = result; }
        }
        return bestStrategy || this.directCalculation.analyze(expr);
    }
    complementToTen(a, op, b, displayOp) {
        if (op !== '+') return null;
        const sum = a + b;
        if (a > 10 || b > 10) return null;
        if (a + b > 10 && a < 10 && b < 10) {
            const complement = 10 - a;
            const remainder = b - complement;
            if (remainder > 0) {
                return {
                    score: 0.95, name: i18n.get('complement_to_ten'), nameEn: 'Complement to Ten',
                    steps: [
                        { text: i18n.get('complete_to_10', {a}), highlight: false },
                        { text: `${a} + ${complement} = 10`, highlight: true },
                        { text: i18n.get('split_b', {b, comp: complement, rem: remainder}), highlight: false },
                        { text: i18n.get('so_result', {rem: remainder, sum}), highlight: true },
                        { text: i18n.get('result_is', {result: sum}), highlight: true, isFinal: true }
                    ],
                    visualType: 'complement', visualData: { a, b, complement, remainder, sum }
                };
            }
        }
        return null;
    }
    decomposeAddition(a, op, b, displayOp) {
        if (op !== '+') return null;
        const aTens = Math.floor(a / 10) * 10, aOnes = a % 10;
        const bTens = Math.floor(b / 10) * 10, bOnes = b % 10;
        const sum = a + b;
        if (a >= 10 && b >= 10) {
            const tensSum = aTens + bTens, onesSum = aOnes + bOnes;
            const steps = [
                { text: i18n.get('decompose_nums'), highlight: false },
                { text: i18n.get('a_equals', {a, tens: aTens, ones: aOnes}), highlight: false },
                { text: i18n.get('a_equals', {a: b, tens: bTens, ones: bOnes}), highlight: false },
                { text: i18n.get('add_tens', {aTens, bTens, sum: tensSum}), highlight: true }
            ];
            if (onesSum >= 10) {
                const onesTens = Math.floor(onesSum / 10) * 10, onesRemainder = onesSum % 10;
                steps.push({ text: i18n.get('add_ones', {aOnes, bOnes, sum: onesSum}), highlight: true });
                steps.push({ text: i18n.get('ones_split', {onesSum, onesTens, onesRem: onesRemainder}), highlight: false });
                steps.push({ text: i18n.get('add_results', {part1: tensSum, part2: onesTens, result: tensSum + onesTens}), highlight: true });
                steps.push({ text: i18n.get('then_add', {part1: tensSum + onesTens, part2: onesRemainder, result: sum}), highlight: true });
            } else {
                steps.push({ text: i18n.get('add_ones', {aOnes, bOnes, sum: onesSum}), highlight: true });
                steps.push({ text: i18n.get('add_results', {part1: tensSum, part2: onesSum, result: sum}), highlight: true });
            }
            steps.push({ text: i18n.get('result_is', {result: sum}), highlight: true, isFinal: true });
            return { score: 0.9, name: i18n.get('decompose_addition'), nameEn: 'Number Decomposition', steps, visualType: 'decompose', visualData: { a, b, aTens, aOnes, bTens, bOnes, sum } };
        }
        return null;
    }
    decomposeSubtraction(a, op, b, displayOp) {
        if (op !== '-') return null;
        const diff = a - b;
        if (b >= 10) {
            const bTens = Math.floor(b / 10) * 10, bOnes = b % 10;
            return {
                score: 0.9, name: i18n.get('decompose_subtraction'), nameEn: 'Decomposed Subtraction',
                steps: [
                    { text: i18n.get('decompose_b', {b}), highlight: false },
                    { text: i18n.get('a_equals', {a: b, tens: bTens, ones: bOnes}), highlight: false },
                    { text: i18n.get('subtract_tens'), highlight: false },
                    { text: `${a} - ${bTens} = ${a - bTens}`, highlight: true },
                    { text: i18n.get('subtract_ones'), highlight: false },
                    { text: `${a - bTens} - ${bOnes} = ${diff}`, highlight: true },
                    { text: i18n.get('result_is', {result: diff}), highlight: true, isFinal: true }
                ],
                visualType: 'numberLine', visualData: { a, b, bTens, bOnes, diff }
            };
        }
        return { score: 0.5, name: i18n.get('direct_subtraction'), nameEn: 'Direct Subtraction', steps: [{ text: i18n.get('subtract_direct', {a, b, result: diff}), highlight: true, isFinal: true }], visualType: 'numberLine', visualData: { a, b, diff } };
    }
    distributiveMultiplication(a, op, b, displayOp) {
        if (op !== '×' && op !== '*') return null;
        const product = a * b;
        if (a >= 10 || b >= 10) {
            let big = a >= 10 ? a : b, small = a >= 10 ? b : a;
            const bigTens = Math.floor(big / 10) * 10, bigOnes = big % 10;
            const part1 = bigTens * small, part2 = bigOnes * small;
            return {
                score: 0.95, name: i18n.get('distributive_multiplication'), nameEn: 'Distributive Multiplication',
                steps: [
                    { text: i18n.get('decompose_b', {b: big}), highlight: false },
                    { text: i18n.get('a_equals', {a: big, tens: bigTens, ones: bigOnes}), highlight: false },
                    { text: i18n.get('multiply_each'), highlight: false },
                    { text: `${bigTens} ${displayOp} ${small} = ${part1}`, highlight: true },
                    { text: `${bigOnes} ${displayOp} ${small} = ${part2}`, highlight: true },
                    { text: i18n.get('add_results', {part1, part2, result: product}), highlight: true },
                    { text: i18n.get('result_is', {result: product}), highlight: true, isFinal: true }
                ],
                visualType: 'decompose', visualData: { a, b, bigTens, bigOnes, small, part1, part2, product }
            };
        }
        return null;
    }
    friendlyNumberMultiplication(a, op, b, displayOp) {
        if (op !== '×' && op !== '*') return null;
        const product = a * b;
        if (a === 25 && b === 4) return { score: 1.0, name: i18n.get('friendly_numbers'), nameEn: 'Friendly Numbers', steps: [{ text: `25 ${displayOp} 4`, highlight: false }, { text: `25 ${displayOp} 4 = 100`, highlight: true, isFinal: true }], visualType: 'blocks', visualData: { a, b, product } };
        if (a === 5 && b === 2) return { score: 1.0, name: i18n.get('friendly_numbers'), nameEn: 'Friendly Numbers', steps: [{ text: `5 ${displayOp} 2 = 10`, highlight: true, isFinal: true }], visualType: 'blocks', visualData: { a, b, product } };
        if (a === 10 || b === 10) return { score: 0.95, name: i18n.get('multiply_by_10'), nameEn: 'Multiply by 10', steps: [{ text: i18n.get('multiply_by_10_adds'), highlight: false }, { text: `${a} ${displayOp} ${b} = ${product}`, highlight: true, isFinal: true }], visualType: 'blocks', visualData: { a, b, product } };
        return null;
    }
    decompositionDivision(a, op, b, displayOp) {
        if (op !== '÷' && op !== '/') return null;
        if (b === 0) return null;
        const quotient = a / b;
        if (!mathEngine.isWholeNumber(quotient)) return null;
        const tens = Math.floor(a / (b * 10)) * b * 10;
        const remainder = a - tens;
        if (tens > 0 && remainder > 0 && remainder % b === 0) {
            const part1 = tens / b, part2 = remainder / b;
            return {
                score: 0.95, name: i18n.get('decompose_division'), nameEn: 'Decomposed Division',
                steps: [
                    { text: i18n.get('decompose_b', {b: a}), highlight: false },
                    { text: i18n.get('a_equals', {a, tens, ones: remainder}), highlight: false },
                    { text: i18n.get('divide_each', {b}), highlight: false },
                    { text: `${tens} ${displayOp} ${b} = ${part1}`, highlight: true },
                    { text: `${remainder} ${displayOp} ${b} = ${part2}`, highlight: true },
                    { text: i18n.get('add_results', {part1, part2, result: quotient}), highlight: true },
                    { text: i18n.get('result_is', {result: quotient}), highlight: true, isFinal: true }
                ],
                visualType: 'decompose', visualData: { a, b, tens, remainder, part1, part2, quotient }
            };
        }
        for (let i = 2; i <= Math.floor(a / 2); i++) {
            if (a % i === 0) {
                const part1 = i, part2 = a - i;
                if (part2 % b === 0 && part1 % b === 0) {
                    const q1 = part1 / b, q2 = part2 / b;
                    return {
                        score: 0.85, name: i18n.get('decompose_division'), nameEn: 'Decomposed Division',
                        steps: [
                            { text: i18n.get('decompose_b', {b: a}), highlight: false },
                            { text: i18n.get('a_equals', {a, tens: part1, ones: part2}), highlight: false },
                            { text: i18n.get('divide_each', {b}), highlight: false },
                            { text: `${part1} ${displayOp} ${b} = ${q1}`, highlight: true },
                            { text: `${part2} ${displayOp} ${b} = ${q2}`, highlight: true },
                            { text: i18n.get('add_results', {part1: q1, part2: q2, result: quotient}), highlight: true },
                            { text: i18n.get('result_is', {result: quotient}), highlight: true, isFinal: true }
                        ],
                        visualType: 'decompose', visualData: { a, b, part1, part2, q1, q2, quotient }
                    };
                }
            }
        }
        return { score: 0.5, name: i18n.get('direct_division'), nameEn: 'Direct Division', steps: [{ text: i18n.get('divide_direct', {a, b, result: quotient}), highlight: true, isFinal: true }], visualType: 'blocks', visualData: { a, b, quotient } };
    }
    directCalculation(a, op, b, displayOp) {
        let result;
        try { result = mathEngine.evaluate(`${a} ${op} ${b}`); } catch (e) { return null; }
        const opMap = { '+': 'add_direct', '-': 'subtract_direct', '×': 'multiply_direct', '*': 'multiply_direct', '÷': 'divide_direct', '/': 'divide_direct' };
        const key = opMap[op] || 'add_direct';
        return { score: 0.3, name: i18n.get('direct_calculation'), nameEn: 'Direct Calculation', steps: [{ text: i18n.get(key, {a, b, result}), highlight: true, isFinal: true }], visualType: 'blocks', visualData: { a, b, result } };
    }
}
const strategyEngine = new StrategyEngine();

// ==================== VISUAL MATH ====================
class VisualMath {
    constructor() { this.container = null; }
    setContainer(element) { this.container = element; }
    clear() { if (this.container) this.container.innerHTML = ''; }
    render(type, data, stepIndex = 0) {
        if (!this.container) return;
        this.clear();
        switch (type) {
            case 'blocks': this.renderBlocks(data, stepIndex); break;
            case 'complement': this.renderComplement(data, stepIndex); break;
            case 'decompose': this.renderDecompose(data, stepIndex); break;
            case 'numberLine': this.renderNumberLine(data, stepIndex); break;
            default: this.renderBlocks(data, stepIndex);
        }
    }
    renderBlocks(data, stepIndex) {
        const { a, b, sum, product, quotient } = data;
        const wrapper = document.createElement('div');
        wrapper.className = 'visual-blocks';
        const total = sum || product || quotient || (a + b);
        const numA = a || 0, numB = b || 0;
        for (let i = 0; i < numA && i < 50; i++) {
            const block = document.createElement('div');
            block.className = 'visual-block group-a';
            block.textContent = i + 1;
            block.style.animationDelay = `${i * 0.03}s`;
            wrapper.appendChild(block);
        }
        if (stepIndex >= 1) {
            const sep = document.createElement('div');
            sep.style.cssText = 'width:20px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;color:var(--text-muted);';
            sep.textContent = '+';
            sep.style.animation = 'fadeIn 0.3s ease';
            wrapper.appendChild(sep);
        }
        for (let i = 0; i < numB && i < 50; i++) {
            const block = document.createElement('div');
            block.className = 'visual-block group-b';
            block.textContent = i + 1;
            block.style.animationDelay = `${(numA + i) * 0.03}s`;
            wrapper.appendChild(block);
        }
        if (stepIndex >= 2) {
            const sep2 = document.createElement('div');
            sep2.style.cssText = 'width:20px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;color:var(--text-muted);';
            sep2.textContent = '=';
            sep2.style.animation = 'fadeIn 0.3s ease';
            wrapper.appendChild(sep2);
            const resultBlock = document.createElement('div');
            resultBlock.className = 'visual-block group-result';
            resultBlock.textContent = total;
            resultBlock.style.cssText = 'font-size:1.1rem;width:48px;height:48px;';
            resultBlock.style.animation = 'popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            wrapper.appendChild(resultBlock);
        }
        this.container.appendChild(wrapper);
    }
    renderComplement(data, stepIndex) {
        const { a, b, complement, remainder, sum } = data;
        const wrapper = document.createElement('div');
        wrapper.className = 'visual-blocks';
        wrapper.style.flexDirection = 'column';
        wrapper.style.gap = '16px';
        const row1 = document.createElement('div');
        row1.className = 'visual-blocks';
        row1.style.marginBottom = '8px';
        for (let i = 0; i < a; i++) { const block = document.createElement('div'); block.className = 'visual-block group-a'; block.textContent = i + 1; row1.appendChild(block); }
        const sep = document.createElement('div'); sep.style.fontSize = '1.5rem'; sep.style.color = 'var(--text-muted)'; sep.textContent = '+'; row1.appendChild(sep);
        for (let i = 0; i < b; i++) { const block = document.createElement('div'); block.className = 'visual-block group-b'; block.textContent = i + 1; row1.appendChild(block); }
        wrapper.appendChild(row1);
        if (stepIndex >= 1) {
            const row2 = document.createElement('div'); row2.className = 'visual-blocks'; row2.style.marginBottom = '8px';
            for (let i = 0; i < 10; i++) { const block = document.createElement('div'); block.className = 'visual-block'; if (i < a) block.classList.add('group-a'); else { block.classList.add('group-a'); block.style.opacity = '0.7'; } block.textContent = i + 1; row2.appendChild(block); }
            const sep2 = document.createElement('div'); sep2.style.fontSize = '1.5rem'; sep2.style.color = 'var(--text-muted)'; sep2.textContent = '+'; row2.appendChild(sep2);
            for (let i = 0; i < remainder; i++) { const block = document.createElement('div'); block.className = 'visual-block group-b'; block.textContent = i + 1; row2.appendChild(block); }
            wrapper.appendChild(row2);
        }
        if (stepIndex >= 2) {
            const row3 = document.createElement('div'); row3.className = 'visual-blocks';
            const tenBlock = document.createElement('div'); tenBlock.className = 'visual-block group-result'; tenBlock.textContent = '10'; tenBlock.style.width = '80px'; row3.appendChild(tenBlock);
            const sep3 = document.createElement('div'); sep3.style.fontSize = '1.5rem'; sep3.style.color = 'var(--text-muted)'; sep3.textContent = '+'; row3.appendChild(sep3);
            const remBlock = document.createElement('div'); remBlock.className = 'visual-block group-b'; remBlock.textContent = remainder; row3.appendChild(remBlock);
            const sep4 = document.createElement('div'); sep4.style.fontSize = '1.5rem'; sep4.style.color = 'var(--text-muted)'; sep4.textContent = '='; row3.appendChild(sep4);
            const resultBlock = document.createElement('div'); resultBlock.className = 'visual-block group-result'; resultBlock.textContent = sum; resultBlock.style.cssText = 'width:48px;height:48px;'; resultBlock.style.animation = 'popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'; row3.appendChild(resultBlock);
            wrapper.appendChild(row3);
        }
        this.container.appendChild(wrapper);
    }
    renderDecompose(data, stepIndex) {
        const { a, b, aTens, aOnes, bTens, bOnes, bigTens, bigOnes, small, part1, part2, product, sum, quotient } = data;
        const wrapper = document.createElement('div');
        wrapper.className = 'visual-blocks';
        wrapper.style.flexDirection = 'column';
        wrapper.style.gap = '12px';
        if (aTens !== undefined && aOnes !== undefined) {
            const row1 = document.createElement('div'); row1.className = 'visual-blocks';
            const label1 = document.createElement('div'); label1.style.cssText = 'width:60px;text-align:start;font-weight:700;color:var(--accent);'; label1.textContent = `${a} =`; row1.appendChild(label1);
            for (let i = 0; i < Math.min(aTens / 10, 10); i++) { const block = document.createElement('div'); block.className = 'visual-block group-a'; block.textContent = '10'; block.style.width = '48px'; row1.appendChild(block); }
            for (let i = 0; i < Math.min(aOnes, 10); i++) { const block = document.createElement('div'); block.className = 'visual-block group-a'; block.textContent = '1'; block.style.cssText = 'width:28px;height:28px;font-size:0.7rem;'; row1.appendChild(block); }
            wrapper.appendChild(row1);
            if (bTens !== undefined && bOnes !== undefined) {
                const row2 = document.createElement('div'); row2.className = 'visual-blocks';
                const label2 = document.createElement('div'); label2.style.cssText = 'width:60px;text-align:start;font-weight:700;color:var(--warning);'; label2.textContent = `${b} =`; row2.appendChild(label2);
                for (let i = 0; i < Math.min(bTens / 10, 10); i++) { const block = document.createElement('div'); block.className = 'visual-block group-b'; block.textContent = '10'; block.style.width = '48px'; row2.appendChild(block); }
                for (let i = 0; i < Math.min(bOnes, 10); i++) { const block = document.createElement('div'); block.className = 'visual-block group-b'; block.textContent = '1'; block.style.cssText = 'width:28px;height:28px;font-size:0.7rem;'; row2.appendChild(block); }
                wrapper.appendChild(row2);
            }
        }
        if (bigTens !== undefined && bigOnes !== undefined) {
            const row = document.createElement('div'); row.className = 'visual-blocks';
            const label = document.createElement('div'); label.style.fontWeight = '700'; label.style.color = 'var(--accent)'; label.textContent = `(${bigTens} + ${bigOnes}) × ${small}`; row.appendChild(label);
            wrapper.appendChild(row);
            if (stepIndex >= 2) {
                const resultRow = document.createElement('div'); resultRow.className = 'visual-blocks';
                const p1Block = document.createElement('div'); p1Block.className = 'visual-block group-a'; p1Block.textContent = part1; p1Block.style.width = '56px'; resultRow.appendChild(p1Block);
                const sep = document.createElement('div'); sep.textContent = '+'; sep.style.fontSize = '1.5rem'; sep.style.color = 'var(--text-muted)'; resultRow.appendChild(sep);
                const p2Block = document.createElement('div'); p2Block.className = 'visual-block group-b'; p2Block.textContent = part2; p2Block.style.width = '56px'; resultRow.appendChild(p2Block);
                const sep2 = document.createElement('div'); sep2.textContent = '='; sep2.style.fontSize = '1.5rem'; sep2.style.color = 'var(--text-muted)'; resultRow.appendChild(sep2);
                const resBlock = document.createElement('div'); resBlock.className = 'visual-block group-result'; resBlock.textContent = product; resBlock.style.width = '64px'; resBlock.style.height = '48px'; resBlock.style.animation = 'popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'; resultRow.appendChild(resBlock);
                wrapper.appendChild(resultRow);
            }
        }
        if (data.tens !== undefined && data.remainder !== undefined) {
            const row = document.createElement('div'); row.className = 'visual-blocks';
            const label = document.createElement('div'); label.style.fontWeight = '700'; label.style.color = 'var(--accent)'; label.textContent = `${a} = ${data.tens} + ${data.remainder}`; row.appendChild(label);
            wrapper.appendChild(row);
            if (stepIndex >= 2) {
                const resultRow = document.createElement('div'); resultRow.className = 'visual-blocks';
                const p1Block = document.createElement('div'); p1Block.className = 'visual-block group-a'; p1Block.textContent = `${data.tens}÷${b}=${data.part1 || (data.tens / b)}`; p1Block.style.cssText = 'width:80px;font-size:0.75rem;'; resultRow.appendChild(p1Block);
                const sep = document.createElement('div'); sep.textContent = '+'; sep.style.fontSize = '1.5rem'; sep.style.color = 'var(--text-muted)'; resultRow.appendChild(sep);
                const p2Block = document.createElement('div'); p2Block.className = 'visual-block group-b'; p2Block.textContent = `${data.remainder}÷${b}=${data.part2 || (data.remainder / b)}`; p2Block.style.cssText = 'width:80px;font-size:0.75rem;'; resultRow.appendChild(p2Block);
                const sep2 = document.createElement('div'); sep2.textContent = '='; sep2.style.fontSize = '1.5rem'; sep2.style.color = 'var(--text-muted)'; resultRow.appendChild(sep2);
                const resBlock = document.createElement('div'); resBlock.className = 'visual-block group-result'; resBlock.textContent = quotient; resBlock.style.cssText = 'width:56px;height:48px;'; resBlock.style.animation = 'popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'; resultRow.appendChild(resBlock);
                wrapper.appendChild(resultRow);
            }
        }
        this.container.appendChild(wrapper);
    }
    renderNumberLine(data, stepIndex) {
        const { a, b, diff, bTens, bOnes } = data;
        const wrapper = document.createElement('div');
        wrapper.className = 'visual-number-line';
        const start = Math.max(0, a - 15);
        const end = a + 5;
        for (let i = start; i <= end; i++) {
            const item = document.createElement('div');
            item.className = 'number-line-item';
            item.textContent = i;
            if (i === a) item.classList.add('active');
            if (bTens !== undefined && i === a - bTens) item.classList.add('highlight');
            if (bOnes !== undefined && i === diff) item.classList.add('active');
            wrapper.appendChild(item);
        }
        this.container.appendChild(wrapper);
        if (stepIndex >= 1 && bTens !== undefined) {
            const annotation = document.createElement('div');
            annotation.style.cssText = 'text-align:center;margin-top:12px;font-size:0.85rem;color:var(--text-secondary);';
            annotation.innerHTML = i18n.currentLang === 'ar' 
                ? `← نطرح ${bTens} ← ثم نطرح ${bOnes}`
                : `← subtract ${bTens} ← then subtract ${bOnes}`;
            annotation.style.animation = 'fadeIn 0.5s ease';
            this.container.appendChild(annotation);
        }
    }
}
const visualMath = new VisualMath();

// ==================== STORAGE ====================
class StorageManager {
    constructor() {
        this.HISTORY_KEY = 'mindcalc_history_v2';
        this.SETTINGS_KEY = 'mindcalc_settings_v2';
        this.MAX_HISTORY = 50;
    }
    getHistory() {
        try { const data = localStorage.getItem(this.HISTORY_KEY); return data ? JSON.parse(data) : []; }
        catch (e) { return []; }
    }
    addHistory(expr, result) {
        const history = this.getHistory();
        const entry = { id: Date.now(), expr: expr, result: result, timestamp: new Date().toISOString() };
        if (history.length > 0 && history[0].expr === expr) return;
        history.unshift(entry);
        if (history.length > this.MAX_HISTORY) history.pop();
        this.saveHistory(history);
        return entry;
    }
    removeHistory(id) {
        let history = this.getHistory();
        history = history.filter(item => item.id !== id);
        this.saveHistory(history);
    }
    clearHistory() { localStorage.removeItem(this.HISTORY_KEY); }
    saveHistory(history) {
        try { localStorage.setItem(this.HISTORY_KEY, JSON.stringify(history)); }
        catch (e) { console.warn('Could not save history:', e); }
    }
    getSettings() {
        try {
            const data = localStorage.getItem(this.SETTINGS_KEY);
            return data ? JSON.parse(data) : this.getDefaultSettings();
        } catch (e) { return this.getDefaultSettings(); }
    }
    getDefaultSettings() { return { theme: 'light', defaultSpeed: 1, soundEnabled: false }; }
    saveSettings(settings) {
        try { localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(settings)); }
        catch (e) { console.warn('Could not save settings:', e); }
    }
    updateSetting(key, value) {
        const settings = this.getSettings();
        settings[key] = value;
        this.saveSettings(settings);
    }
}
const storage = new StorageManager();

// ==================== PWA INSTALL ====================
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installPrompt = document.getElementById('install-prompt');
    if (installPrompt && !localStorage.getItem('mindcalc_install_dismissed')) {
        installPrompt.classList.add('show');
    }
});
window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    const installPrompt = document.getElementById('install-prompt');
    if (installPrompt) installPrompt.classList.remove('show');
    localStorage.setItem('mindcalc_installed', 'true');
});

// ==================== MAIN APP ====================
class MindCalcApp {
    constructor() {
        this.currentExpr = '';
        this.currentResult = null;
        this.currentStrategy = null;
        this.currentStep = 0;
        this.isPlaying = false;
        this.playInterval = null;
        this.playSpeed = 1;
        this.isPracticeMode = false;
        this.practiceLevel = 1;
        this.practiceScore = 0;
        this.currentQuestion = null;
        this.init();
    }
    init() {
        this.cacheElements();
        this.bindEvents();
        this.loadSettings();
        this.renderHistory();
        visualMath.setContainer(this.visualArea);
    }
    cacheElements() {
        this.expressionEl = document.getElementById('expression');
        this.resultEl = document.getElementById('result');
        this.explainBtn = document.getElementById('explain-btn');
        this.explanationSection = document.getElementById('explanation-section');
        this.strategyBadge = document.getElementById('strategy-badge');
        this.visualArea = document.getElementById('visual-area');
        this.stepsArea = document.getElementById('steps-area');
        this.stepIndicator = document.getElementById('step-indicator');
        this.progressFill = document.getElementById('progress-fill');
        this.btnPlay = document.getElementById('btn-play');
        this.btnPrev = document.getElementById('btn-prev');
        this.btnNext = document.getElementById('btn-next');
        this.btnRestart = document.getElementById('btn-restart');
        this.speedSelect = document.getElementById('speed-select');
        this.historyList = document.getElementById('history-list');
        this.clearHistoryBtn = document.getElementById('clear-history');
        this.practiceSection = document.getElementById('practice-section');
        this.practiceToggle = document.getElementById('practice-toggle');
        this.practiceScoreEl = document.getElementById('practice-score');
        this.questionText = document.getElementById('question-text');
        this.practiceAnswer = document.getElementById('practice-answer');
        this.practiceSubmit = document.getElementById('practice-submit');
        this.practiceStart = document.getElementById('practice-start');
        this.practiceFeedback = document.getElementById('practice-feedback');
        this.themeToggle = document.getElementById('theme-toggle');
        this.langToggle = document.getElementById('lang-toggle');
        this.settingsBtn = document.getElementById('settings-btn');
        this.settingsModal = document.getElementById('settings-modal');
        this.modalClose = document.getElementById('modal-close');
        this.themeToggleModal = document.getElementById('theme-toggle-modal');
        this.defaultSpeed = document.getElementById('default-speed');
        this.installPrompt = document.getElementById('install-prompt');
        this.installYes = document.getElementById('install-yes');
        this.installNo = document.getElementById('install-no');
    }
    bindEvents() {
        document.querySelectorAll('.calc-buttons .btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleCalcButton(e));
        });
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
        this.explainBtn.addEventListener('click', () => this.showExplanation());
        document.querySelectorAll('.demo-chip').forEach(chip => {
            chip.addEventListener('click', (e) => this.loadDemo(e.target.dataset.expr));
        });
        this.btnPlay.addEventListener('click', () => this.togglePlay());
        this.btnPrev.addEventListener('click', () => this.prevStep());
        this.btnNext.addEventListener('click', () => this.nextStep());
        this.btnRestart.addEventListener('click', () => this.restartSteps());
        this.speedSelect.addEventListener('change', (e) => {
            this.playSpeed = parseFloat(e.target.value);
            if (this.isPlaying) { this.stopPlay(); this.startPlay(); }
        });
        document.querySelectorAll('.tab-btn').forEach(tab => {
            tab.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
        });
        this.clearHistoryBtn.addEventListener('click', () => this.clearHistory());
        this.practiceToggle.addEventListener('click', () => this.togglePracticeMode());
        this.practiceStart.addEventListener('click', () => this.startPractice());
        this.practiceSubmit.addEventListener('click', () => this.checkPracticeAnswer());
        this.practiceAnswer.addEventListener('keypress', (e) => { if (e.key === 'Enter') this.checkPracticeAnswer(); });
        document.querySelectorAll('.level-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectLevel(e.target.dataset.level));
        });
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        this.langToggle.addEventListener('click', () => this.toggleLanguage());
        this.settingsBtn.addEventListener('click', () => this.openSettings());
        this.modalClose.addEventListener('click', () => this.closeSettings());
        this.themeToggleModal.addEventListener('click', () => this.toggleTheme());
        this.defaultSpeed.addEventListener('change', (e) => {
            storage.updateSetting('defaultSpeed', parseFloat(e.target.value));
            this.playSpeed = parseFloat(e.target.value);
            this.speedSelect.value = e.target.value;
        });
        this.settingsModal.addEventListener('click', (e) => { if (e.target === this.settingsModal) this.closeSettings(); });
        if (this.installYes) {
            this.installYes.addEventListener('click', () => {
                if (deferredPrompt) {
                    deferredPrompt.prompt();
                    deferredPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') localStorage.setItem('mindcalc_installed', 'true');
                        deferredPrompt = null;
                    });
                }
                if (this.installPrompt) this.installPrompt.classList.remove('show');
            });
        }
        if (this.installNo) {
            this.installNo.addEventListener('click', () => {
                localStorage.setItem('mindcalc_install_dismissed', 'true');
                if (this.installPrompt) this.installPrompt.classList.remove('show');
            });
        }
    }
    toggleLanguage() {
        i18n.toggleLanguage();
        if (this.currentStrategy) {
            this.currentStrategy = strategyEngine.analyze(this.currentExpr);
            if (this.currentStrategy) {
                this.strategyBadge.textContent = this.currentStrategy.name;
                this.renderCurrentStep();
            }
        }
        this.renderHistory();
        this.updatePlayerUI();
    }
    handleCalcButton(e) {
        const btn = e.currentTarget;
        const number = btn.dataset.number;
        const action = btn.dataset.action;
        if (number !== undefined) this.appendNumber(number);
        else if (action) this.handleAction(action);
    }
    handleKeyboard(e) {
        const key = e.key;
        if (key >= '0' && key <= '9') this.appendNumber(key);
        else if (key === '.') this.handleAction('decimal');
        else if (key === '+' || key === '-') this.appendOperator(key);
        else if (key === '*') this.appendOperator('×');
        else if (key === '/') this.appendOperator('÷');
        else if (key === 'Enter' || key === '=') this.calculate();
        else if (key === 'Backspace') this.handleAction('del');
        else if (key === 'Escape') this.handleAction('ac');
        else if (key === '%') this.handleAction('percent');
    }
    appendNumber(num) {
        if (this.currentExpr === '0' && num === '0') return;
        if (this.currentExpr === '0' && num !== '0') this.currentExpr = num;
        else this.currentExpr += num;
        this.updateDisplay();
    }
    appendOperator(op) {
        if (this.currentExpr === '') return;
        const lastChar = this.currentExpr.slice(-1);
        if (['+', '-', '×', '÷', '*', '/', '%'].includes(lastChar)) {
            this.currentExpr = this.currentExpr.slice(0, -1) + op;
        } else {
            this.currentExpr += ' ' + op + ' ';
        }
        this.updateDisplay();
    }
    handleAction(action) {
        switch (action) {
            case 'ac': this.currentExpr = ''; this.currentResult = null; this.hideExplanation(); break;
            case 'del':
                if (this.currentExpr.length > 0) {
                    this.currentExpr = this.currentExpr.trimEnd();
                    this.currentExpr = this.currentExpr.slice(0, -1);
                    this.currentExpr = this.currentExpr.trimEnd();
                }
                break;
            case 'decimal':
                const parts = this.currentExpr.split(/[\+\-\×\÷\*\/\%]/);
                const lastPart = parts[parts.length - 1].trim();
                if (!lastPart.includes('.')) this.currentExpr += '.';
                break;
            case 'negate': if (this.currentExpr === '') this.currentExpr = '-'; break;
            case 'add': this.appendOperator('+'); break;
            case 'subtract': this.appendOperator('-'); break;
            case 'multiply': this.appendOperator('×'); break;
            case 'divide': this.appendOperator('÷'); break;
            case 'percent': this.appendOperator('%'); break;
            case 'equals': this.calculate(); return;
        }
        this.updateDisplay();
    }
    calculate() {
        if (!this.currentExpr || this.currentExpr.trim() === '') return;
        try {
            let expr = this.currentExpr.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
            const result = mathEngine.evaluate(expr);
            this.currentResult = result;
            const formattedResult = mathEngine.formatNumber(result);
            this.resultEl.textContent = formattedResult;
            this.explainBtn.disabled = false;
            storage.addHistory(this.currentExpr, formattedResult);
            this.renderHistory();
        } catch (err) {
            const errorMap = { 'division_by_zero': 'error_div_zero', 'empty_expression': 'error_empty', 'invalid_input': 'error_invalid', 'mismatched_parens': 'error_parens', 'invalid_expression': 'error_expr' };
            const key = errorMap[err.message] || 'error_calc';
            this.resultEl.textContent = i18n.get(key);
            this.resultEl.style.color = 'var(--danger)';
            setTimeout(() => { this.resultEl.style.color = ''; }, 2000);
            this.explainBtn.disabled = true;
        }
    }
    updateDisplay() {
        this.expressionEl.textContent = this.currentExpr;
        if (this.currentResult === null) this.resultEl.textContent = '0';
    }
    showExplanation() {
        if (!this.currentExpr || !this.currentResult) return;
        this.currentStrategy = strategyEngine.analyze(this.currentExpr);
        if (!this.currentStrategy) return;
        this.explanationSection.style.display = 'block';
        this.explanationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.strategyBadge.textContent = this.currentStrategy.name;
        this.currentStep = 0;
        this.stopPlay();
        this.updatePlayerUI();
        this.renderCurrentStep();
    }
    hideExplanation() {
        this.explanationSection.style.display = 'none';
        this.stopPlay();
        this.currentStrategy = null;
        this.currentStep = 0;
    }
    renderCurrentStep() {
        if (!this.currentStrategy) return;
        visualMath.render(this.currentStrategy.visualType, this.currentStrategy.visualData, this.currentStep);
        this.stepsArea.innerHTML = '';
        for (let i = 0; i <= this.currentStep; i++) {
            const s = this.currentStrategy.steps[i];
            const stepEl = document.createElement('div');
            stepEl.className = 'step-item';
            if (s.highlight) stepEl.classList.add('highlight');
            if (s.isFinal) stepEl.classList.add('final');
            const numSpan = document.createElement('span');
            numSpan.className = 'step-number';
            numSpan.textContent = i + 1;
            stepEl.appendChild(numSpan);
            const textSpan = document.createElement('span');
            textSpan.textContent = s.text;
            stepEl.appendChild(textSpan);
            this.stepsArea.appendChild(stepEl);
        }
        this.stepsArea.scrollTop = this.stepsArea.scrollHeight;
    }
    updatePlayerUI() {
        if (!this.currentStrategy) return;
        const steps = this.currentStrategy.steps;
        const total = steps.length;
        this.stepIndicator.textContent = i18n.get('step_indicator', {current: this.currentStep + 1, total});
        const progress = ((this.currentStep + 1) / total) * 100;
        this.progressFill.style.width = `${progress}%`;
        this.btnPrev.disabled = this.currentStep === 0;
        this.btnNext.disabled = this.currentStep >= total - 1;
        this.btnPlay.innerHTML = this.isPlaying ? '⏸' : '▶';
    }
    nextStep() {
        if (!this.currentStrategy) return;
        if (this.currentStep < this.currentStrategy.steps.length - 1) {
            this.currentStep++;
            this.renderCurrentStep();
            this.updatePlayerUI();
        } else {
            this.stopPlay();
        }
    }
    prevStep() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.renderCurrentStep();
            this.updatePlayerUI();
        }
    }
    restartSteps() {
        this.currentStep = 0;
        this.stopPlay();
        this.renderCurrentStep();
        this.updatePlayerUI();
    }
    togglePlay() {
        if (this.isPlaying) this.stopPlay();
        else this.startPlay();
    }
    startPlay() {
        if (!this.currentStrategy) return;
        this.isPlaying = true;
        this.updatePlayerUI();
        const delay = 2000 / this.playSpeed;
        this.playInterval = setInterval(() => {
            if (this.currentStep < this.currentStrategy.steps.length - 1) this.nextStep();
            else this.stopPlay();
        }, delay);
    }
    stopPlay() {
        this.isPlaying = false;
        if (this.playInterval) { clearInterval(this.playInterval); this.playInterval = null; }
        this.updatePlayerUI();
    }
    switchTab(tab) {
        document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
        document.querySelector(`.tab-btn[data-tab="${tab}"]`).classList.add('active');
        this.renderCurrentStep();
    }
    loadDemo(expr) {
        this.currentExpr = expr;
        this.updateDisplay();
        this.calculate();
        setTimeout(() => { this.showExplanation(); }, 300);
    }
    renderHistory() {
        const history = storage.getHistory();
        if (history.length === 0) {
            this.historyList.innerHTML = `<div class="history-empty">${i18n.get('no_history')}</div>`;
            return;
        }
        this.historyList.innerHTML = '';
        history.forEach(item => {
            const el = document.createElement('div');
            el.className = 'history-item';
            el.innerHTML = `<span class="history-expr">${item.expr}</span><div style="display:flex;align-items:center;gap:8px;"><span class="history-result">= ${item.result}</span><button class="history-delete" data-id="${item.id}">🗑</button></div>`;
            el.addEventListener('click', (e) => {
                if (e.target.classList.contains('history-delete')) return;
                this.currentExpr = item.expr;
                this.currentResult = parseFloat(item.result);
                this.updateDisplay();
                this.resultEl.textContent = item.result;
                this.explainBtn.disabled = false;
                this.showExplanation();
            });
            const delBtn = el.querySelector('.history-delete');
            delBtn.addEventListener('click', (e) => { e.stopPropagation(); storage.removeHistory(item.id); this.renderHistory(); });
            this.historyList.appendChild(el);
        });
    }
    clearHistory() {
        if (confirm(i18n.get('clear_confirm'))) {
            storage.clearHistory();
            this.renderHistory();
        }
    }
    togglePracticeMode() {
        this.isPracticeMode = !this.isPracticeMode;
        this.practiceToggle.classList.toggle('active', this.isPracticeMode);
        if (this.isPracticeMode) {
            this.practiceSection.style.display = 'block';
            this.practiceSection.scrollIntoView({ behavior: 'smooth' });
            this.practiceScore = 0;
            this.practiceScoreEl.textContent = '0';
        } else {
            this.practiceSection.style.display = 'none';
        }
    }
    selectLevel(level) {
        this.practiceLevel = level;
        document.querySelectorAll('.level-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.level === level);
        });
        this.practiceScore = 0;
        this.practiceScoreEl.textContent = '0';
        this.currentQuestion = null;
        this.questionText.textContent = i18n.get('press_start');
        this.practiceAnswer.value = '';
        this.practiceAnswer.disabled = true;
        this.practiceSubmit.disabled = true;
        this.practiceFeedback.textContent = '';
        this.practiceFeedback.className = 'practice-feedback';
    }
    generateQuestion() {
        const level = this.practiceLevel;
        let a, b, op, answer;
        const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        switch (level) {
            case '1': a = rand(1, 10); b = rand(1, 10); op = '+'; answer = a + b; break;
            case '2': a = rand(10, 50); b = rand(1, a); op = '-'; answer = a - b; break;
            case '3':
                if (Math.random() > 0.5) { a = rand(10, 100); b = rand(10, 100); op = '+'; answer = a + b; }
                else { a = rand(20, 100); b = rand(1, a); op = '-'; answer = a - b; }
                break;
            case '4': a = rand(2, 12); b = rand(2, 12); op = '×'; answer = a * b; break;
            case '5': b = rand(2, 10); answer = rand(2, 12); a = b * answer; op = '÷'; break;
            case 'challenge':
            default:
                const ops = ['+', '-', '×', '÷'];
                op = ops[rand(0, 3)];
                switch (op) {
                    case '+': a = rand(1, 100); b = rand(1, 100); answer = a + b; break;
                    case '-': a = rand(10, 100); b = rand(1, a); answer = a - b; break;
                    case '×': a = rand(2, 15); b = rand(2, 15); answer = a * b; break;
                    case '÷': b = rand(2, 10); answer = rand(2, 15); a = b * answer; break;
                }
                break;
        }
        return { a, op, b, answer, expr: `${a} ${op} ${b}` };
    }
    startPractice() {
        this.currentQuestion = this.generateQuestion();
        this.questionText.textContent = `${this.currentQuestion.expr} = ?`;
        this.practiceAnswer.value = '';
        this.practiceAnswer.disabled = false;
        this.practiceAnswer.focus();
        this.practiceSubmit.disabled = false;
        this.practiceStart.style.display = 'none';
        this.practiceFeedback.textContent = '';
        this.practiceFeedback.className = 'practice-feedback';
        const oldExp = this.practiceSection.querySelector('.practice-explanation');
        if (oldExp) oldExp.remove();
    }
    checkPracticeAnswer() {
        if (!this.currentQuestion) return;
        const userAnswer = parseFloat(this.practiceAnswer.value);
        const correct = userAnswer === this.currentQuestion.answer;
        if (correct) {
            this.practiceScore += 10;
            this.practiceScoreEl.textContent = this.practiceScore;
            this.practiceFeedback.textContent = i18n.get('correct');
            this.practiceFeedback.className = 'practice-feedback correct';
            this.showPracticeExplanation();
            setTimeout(() => { this.startPractice(); }, 3000);
        } else {
            this.practiceFeedback.textContent = i18n.get('wrong', {answer: this.currentQuestion.answer});
            this.practiceFeedback.className = 'practice-feedback wrong';
            this.showPracticeExplanation();
            setTimeout(() => { this.startPractice(); }, 4000);
        }
    }
    showPracticeExplanation() {
        const strategy = strategyEngine.analyze(this.currentQuestion.expr);
        if (!strategy) return;
        const oldExp = this.practiceSection.querySelector('.practice-explanation');
        if (oldExp) oldExp.remove();
        const expDiv = document.createElement('div');
        expDiv.className = 'practice-explanation';
        const title = document.createElement('h4');
        title.textContent = `🧠 ${strategy.name}:`;
        expDiv.appendChild(title);
        strategy.steps.forEach((step, i) => {
            const stepEl = document.createElement('div');
            stepEl.className = 'step-item';
            if (step.highlight) stepEl.classList.add('highlight');
            const numSpan = document.createElement('span');
            numSpan.className = 'step-number';
            numSpan.textContent = i + 1;
            stepEl.appendChild(numSpan);
            const textSpan = document.createElement('span');
            textSpan.textContent = step.text;
            stepEl.appendChild(textSpan);
            expDiv.appendChild(stepEl);
        });
        this.practiceSection.querySelector('.question-area').appendChild(expDiv);
    }
    loadSettings() {
        const settings = storage.getSettings();
        if (settings.theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            this.updateThemeIcon();
        }
        this.playSpeed = settings.defaultSpeed || 1;
        this.speedSelect.value = this.playSpeed;
        this.defaultSpeed.value = this.playSpeed;
    }
    toggleTheme() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) { document.documentElement.removeAttribute('data-theme'); storage.updateSetting('theme', 'light'); }
        else { document.documentElement.setAttribute('data-theme', 'dark'); storage.updateSetting('theme', 'dark'); }
        this.updateThemeIcon();
    }
    updateThemeIcon() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const icon = this.themeToggle.querySelector('.theme-icon');
        if (icon) icon.textContent = isDark ? '☀️' : '🌙';
    }
    openSettings() { this.settingsModal.classList.add('active'); }
    closeSettings() { this.settingsModal.classList.remove('active'); }
}
document.addEventListener('DOMContentLoaded', () => { window.app = new MindCalcApp(); });
