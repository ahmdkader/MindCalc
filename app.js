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
        solve_yourself_btn: "حلها بنفسك",
        solve_yourself_title: "✏️ حلها بنفسك",
        check_step: "تحقق",
        next_step: "الخطوة التالية",
        step_progress: "الخطوة {current} من {total}",
        enter_answer: "أدخل إجابتك",
        demo_title: "أمثلة سريعة",
        solution_method: "طريقة الحل",
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
        check: "تحقق", start: "ابدأ", next: "التالي",
        back_to_calc: "رجوع للآلة",
        history_title: "📜 سجل العمليات",
        history_nav_title: "السجل",
        history_nav_desc: "شوف عملياتك السابقة",
        practice_nav_title: "درب نفسك",
        practice_nav_desc: "تمرن وحسّن مهاراتك",
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
        menu_title: "القائمة",
        menu_settings: "⚙️ الإعدادات",
        menu_history: "📜 السجل",
        menu_practice: "🎯 التدريب",
        friendly_numbers_strategy: "استراتيجية الأعداد المألوفة",
        round_to_friendly: "نقرب {a} إلى العدد المألوف {friendly}:",
        adjust_other: "نعدل العدد الثاني: {b} - {adjust} = {newB}",
        add_friendly: "الآن نجمع: {friendly} + {newB} = {result}",
        skip_decompose_simple: "عملية بسيطة مباشرة",
    },
    en: {
        subtitle: "Calculate... and Understand",
        explain_btn: "Explain the Method",
        solve_yourself_btn: "Solve Yourself",
        solve_yourself_title: "✏️ Solve Yourself",
        check_step: "Check",
        next_step: "Next Step",
        step_progress: "Step {current} of {total}",
        enter_answer: "Enter your answer",
        demo_title: "Quick Examples",
        solution_method: "Solution Method",
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
        check: "Check", start: "Start", next: "Next",
        back_to_calc: "Back to Calculator",
        history_title: "📜 History",
        history_nav_title: "History",
        history_nav_desc: "View your past operations",
        practice_nav_title: "Practice",
        practice_nav_desc: "Train and improve your skills",
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
        menu_title: "Menu",
        menu_settings: "⚙️ Settings",
        menu_history: "📜 History",
        menu_practice: "🎯 Practice",
        friendly_numbers_strategy: "Friendly Numbers Strategy",
        round_to_friendly: "Round {a} to the friendly number {friendly}:",
        adjust_other: "Adjust the other number: {b} - {adjust} = {newB}",
        add_friendly: "Now add: {friendly} + {newB} = {result}",
        skip_decompose_simple: "Simple direct operation",
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
        if (html) {
            html.setAttribute('lang', this.currentLang);
            html.setAttribute('dir', this.currentLang === 'ar' ? 'rtl' : 'ltr');
        }
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

        // Update menu items
        const menuSettings = document.getElementById('menu-settings-text');
        if (menuSettings) menuSettings.textContent = this.get('menu_settings');
        const menuHistory = document.getElementById('menu-history-text');
        if (menuHistory) menuHistory.textContent = this.get('menu_history');
        const menuPractice = document.getElementById('menu-practice-text');
        if (menuPractice) menuPractice.textContent = this.get('menu_practice');
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
        const match = clean.match(/^(-?\d+\.?\d*)([\+\-\×\*\÷\/\%])(-?\d+\.?\d*)$/);
        if (!match) return null;
        return { a: parseFloat(match[1]), op: match[2], b: parseFloat(match[3]) };
    }
}
const mathEngine = new MathEngine();

// ==================== STRATEGY ENGINE ====================
class StrategyEngine {
    constructor() {
        this.strategies = [
            this.complementToTen,
            this.friendlyNumbersAddition,  // NEW: Friendly numbers strategy
            this.decomposeAddition,
            this.decomposeSubtraction,
            this.distributiveMultiplication,
            this.friendlyNumberMultiplication,
            this.decompositionDivision,
            this.directCalculation
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

    // NEW: Friendly Numbers Strategy for Addition
    // For 48 + 27: round 48 to 50 (add 2), subtract 2 from 27 -> 25, then 50 + 25 = 75
    friendlyNumbersAddition(a, op, b, displayOp) {
        if (op !== '+') return null;
        const sum = a + b;

        // Skip if either number is less than 10 (use complementToTen instead)
        if (a < 10 || b < 10) return null;

        // Skip if both numbers end in 0 (simple operation, no decomposition needed)
        if (a % 10 === 0 && b % 10 === 0) return null;

        // Skip if one number ends in 0 (simple enough)
        if (a % 10 === 0 || b % 10 === 0) return null;

        // Find which number is closer to a "friendly" number (multiple of 10)
        const aOnes = a % 10;
        const bOnes = b % 10;

        // Determine which number to round and in which direction
        let roundUp, roundDown, adjust, friendly, other, newOther;

        // Prefer rounding up if ones digit >= 5, down if < 5
        // But also consider which gives a simpler adjustment
        const aDistUp = 10 - aOnes;  // distance to next ten (e.g., 48 -> 50, dist=2)
        const aDistDown = aOnes;      // distance to prev ten (e.g., 48 -> 40, dist=8)
        const bDistUp = 10 - bOnes;
        const bDistDown = bOnes;

        // Choose the smaller adjustment
        let useA, dist, direction;

        // Find minimum distance
        const minDist = Math.min(aDistUp, aDistDown, bDistUp, bDistDown);

        if (minDist === aDistUp) {
            useA = true; dist = aDistUp; direction = 'up';
        } else if (minDist === aDistDown) {
            useA = true; dist = aDistDown; direction = 'down';
        } else if (minDist === bDistUp) {
            useA = false; dist = bDistUp; direction = 'up';
        } else {
            useA = false; dist = bDistDown; direction = 'down';
        }

        if (useA) {
            if (direction === 'up') {
                friendly = a + dist;
                other = b;
                newOther = b - dist;
            } else {
                friendly = a - dist;
                other = b;
                newOther = b + dist;
            }
            adjust = dist;
        } else {
            if (direction === 'up') {
                friendly = b + dist;
                other = a;
                newOther = a - dist;
            } else {
                friendly = b - dist;
                other = a;
                newOther = a + dist;
            }
            adjust = dist;
        }

        // Only use this strategy if the adjustment is small (<= 5) and makes sense
        if (adjust > 5) return null;

        const steps = [
            { text: i18n.get('round_to_friendly', {a: useA ? a : b, friendly}), answer: null },
            { text: `${useA ? a : b} ${displayOp} ${adjust} = ${friendly}`, answer: friendly },
            { text: i18n.get('adjust_other', {b: useA ? b : a, adjust, newB: newOther}), answer: null },
            { text: `${useA ? b : a} ${displayOp === '+' ? '-' : '+'} ${adjust} = ${newOther}`, answer: newOther },
            { text: i18n.get('add_friendly', {friendly, newB: newOther, result: sum}), answer: sum },
            { text: i18n.get('result_is', {result: sum}), answer: sum, isFinal: true }
        ];

        return { 
            score: 0.92, 
            name: i18n.get('friendly_numbers_strategy'), 
            nameEn: 'Friendly Numbers Strategy', 
            steps 
        };
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
                        { text: i18n.get('complete_to_10', {a}), answer: null },
                        { text: `${a} + ${complement} = 10`, answer: 10 },
                        { text: i18n.get('split_b', {b, comp: complement, rem: remainder}), answer: null },
                        { text: i18n.get('so_result', {rem: remainder, sum}), answer: sum },
                        { text: i18n.get('result_is', {result: sum}), answer: sum, isFinal: true }
                    ]
                };
            }
        }
        return null;
    }
    decomposeAddition(a, op, b, displayOp) {
        if (op !== '+') return null;

        // SKIP DECOMPOSITION for simple cases:
        // 1. Both numbers end in 0 (e.g., 90 + 10)
        // 2. One number ends in 0 (e.g., 50 + 23)
        if (a % 10 === 0 && b % 10 === 0) return null;
        if (a % 10 === 0 || b % 10 === 0) return null;

        // 3. Numbers less than 10 (handled by complementToTen)
        if (a < 10 || b < 10) return null;

        const aTens = Math.floor(a / 10) * 10, aOnes = a % 10;
        const bTens = Math.floor(b / 10) * 10, bOnes = b % 10;
        const sum = a + b;

        if (a >= 10 && b >= 10) {
            const tensSum = aTens + bTens, onesSum = aOnes + bOnes;
            const steps = [
                { text: i18n.get('decompose_nums'), answer: null },
                { text: i18n.get('a_equals', {a, tens: aTens, ones: aOnes}), answer: null },
                { text: i18n.get('a_equals', {a: b, tens: bTens, ones: bOnes}), answer: null },
                { text: i18n.get('add_tens', {aTens, bTens, sum: tensSum}), answer: tensSum }
            ];
            if (onesSum >= 10) {
                const onesTens = Math.floor(onesSum / 10) * 10, onesRemainder = onesSum % 10;
                steps.push({ text: i18n.get('add_ones', {aOnes, bOnes, sum: onesSum}), answer: onesSum });
                steps.push({ text: i18n.get('ones_split', {onesSum, onesTens, onesRem: onesRemainder}), answer: null });
                steps.push({ text: i18n.get('add_results', {part1: tensSum, part2: onesTens, result: tensSum + onesTens}), answer: tensSum + onesTens });
                steps.push({ text: i18n.get('then_add', {part1: tensSum + onesTens, part2: onesRemainder, result: sum}), answer: sum });
            } else {
                steps.push({ text: i18n.get('add_ones', {aOnes, bOnes, sum: onesSum}), answer: onesSum });
                steps.push({ text: i18n.get('add_results', {part1: tensSum, part2: onesSum, result: sum}), answer: sum });
            }
            steps.push({ text: i18n.get('result_is', {result: sum}), answer: sum, isFinal: true });
            return { score: 0.9, name: i18n.get('decompose_addition'), nameEn: 'Number Decomposition', steps };
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
                    { text: i18n.get('decompose_b', {b}), answer: null },
                    { text: i18n.get('a_equals', {a: b, tens: bTens, ones: bOnes}), answer: null },
                    { text: i18n.get('subtract_tens'), answer: null },
                    { text: `${a} - ${bTens} = ${a - bTens}`, answer: a - bTens },
                    { text: i18n.get('subtract_ones'), answer: null },
                    { text: `${a - bTens} - ${bOnes} = ${diff}`, answer: diff },
                    { text: i18n.get('result_is', {result: diff}), answer: diff, isFinal: true }
                ]
            };
        }
        return { score: 0.5, name: i18n.get('direct_subtraction'), nameEn: 'Direct Subtraction', steps: [{ text: i18n.get('subtract_direct', {a, b, result: diff}), answer: diff, isFinal: true }] };
    }
    distributiveMultiplication(a, op, b, displayOp) {
        if (op !== '×' && op !== '*') return null;
        const product = a * b;
        // Decompose the LARGER number
        let big = Math.max(a, b);
        let small = Math.min(a, b);

        if (big >= 10) {
            const bigTens = Math.floor(big / 10) * 10, bigOnes = big % 10;
            const part1 = bigTens * small, part2 = bigOnes * small;
            return {
                score: 0.95, name: i18n.get('distributive_multiplication'), nameEn: 'Distributive Multiplication',
                steps: [
                    { text: i18n.get('decompose_b', {b: big}), answer: null },
                    { text: i18n.get('a_equals', {a: big, tens: bigTens, ones: bigOnes}), answer: null },
                    { text: i18n.get('multiply_each'), answer: null },
                    { text: `${bigTens} ${displayOp} ${small} = ${part1}`, answer: part1 },
                    { text: `${bigOnes} ${displayOp} ${small} = ${part2}`, answer: part2 },
                    { text: i18n.get('add_results', {part1, part2, result: product}), answer: product },
                    { text: i18n.get('result_is', {result: product}), answer: product, isFinal: true }
                ]
            };
        }
        return null;
    }
    friendlyNumberMultiplication(a, op, b, displayOp) {
        if (op !== '×' && op !== '*') return null;
        const product = a * b;
        if (a === 25 && b === 4) return { score: 1.0, name: i18n.get('friendly_numbers'), nameEn: 'Friendly Numbers', steps: [{ text: `25 ${displayOp} 4`, answer: null }, { text: `25 ${displayOp} 4 = 100`, answer: 100, isFinal: true }] };
        if (a === 5 && b === 2) return { score: 1.0, name: i18n.get('friendly_numbers'), nameEn: 'Friendly Numbers', steps: [{ text: `5 ${displayOp} 2 = 10`, answer: 10, isFinal: true }] };
        if (a === 10 || b === 10) return { score: 0.95, name: i18n.get('multiply_by_10'), nameEn: 'Multiply by 10', steps: [{ text: i18n.get('multiply_by_10_adds'), answer: null }, { text: `${a} ${displayOp} ${b} = ${product}`, answer: product, isFinal: true }] };
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
                    { text: i18n.get('decompose_b', {b: a}), answer: null },
                    { text: i18n.get('a_equals', {a, tens, ones: remainder}), answer: null },
                    { text: i18n.get('divide_each', {b}), answer: null },
                    { text: `${tens} ${displayOp} ${b} = ${part1}`, answer: part1 },
                    { text: `${remainder} ${displayOp} ${b} = ${part2}`, answer: part2 },
                    { text: i18n.get('add_results', {part1, part2, result: quotient}), answer: quotient },
                    { text: i18n.get('result_is', {result: quotient}), answer: quotient, isFinal: true }
                ]
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
                            { text: i18n.get('decompose_b', {b: a}), answer: null },
                            { text: i18n.get('a_equals', {a, tens: part1, ones: part2}), answer: null },
                            { text: i18n.get('divide_each', {b}), answer: null },
                            { text: `${part1} ${displayOp} ${b} = ${q1}`, answer: q1 },
                            { text: `${part2} ${displayOp} ${b} = ${q2}`, answer: q2 },
                            { text: i18n.get('add_results', {part1: q1, part2: q2, result: quotient}), answer: quotient },
                            { text: i18n.get('result_is', {result: quotient}), answer: quotient, isFinal: true }
                        ]
                    };
                }
            }
        }
        return { score: 0.5, name: i18n.get('direct_division'), nameEn: 'Direct Division', steps: [{ text: i18n.get('divide_direct', {a, b, result: quotient}), answer: quotient, isFinal: true }] };
    }
    directCalculation(a, op, b, displayOp) {
        let result;
        try { result = mathEngine.evaluate(`${a} ${op} ${b}`); } catch (e) { return null; }
        const opMap = { '+': 'add_direct', '-': 'subtract_direct', '×': 'multiply_direct', '*': 'multiply_direct', '÷': 'divide_direct', '/': 'divide_direct' };
        const key = opMap[op] || 'add_direct';
        return { score: 0.3, name: i18n.get('direct_calculation'), nameEn: 'Direct Calculation', steps: [{ text: i18n.get(key, {a, b, result}), answer: result, isFinal: true }] };
    }
}
const strategyEngine = new StrategyEngine();

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
let isIOS = false;
let isStandalone = false;

function detectIOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
}

function detectStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches ||
           window.navigator.standalone === true;
}

function checkInstallEligibility() {
    isIOS = detectIOS();
    isStandalone = detectStandalone();

    if (isStandalone) {
        const installPrompt = document.getElementById('install-prompt');
        if (installPrompt) installPrompt.style.display = 'none';
        return;
    }

    if (isIOS && !localStorage.getItem('mindcalc_install_dismissed')) {
        setTimeout(() => {
            const installPrompt = document.getElementById('install-prompt');
            if (installPrompt) {
                installPrompt.classList.add('show');
                const installYes = document.getElementById('install-yes');
                if (installYes) {
                    installYes.textContent = i18n.currentLang === 'ar' ? 'تعليمات التثبيت' : 'Install Instructions';
                }
            }
        }, 3000);
    }
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    if (!localStorage.getItem('mindcalc_install_dismissed') && !isStandalone) {
        const installPrompt = document.getElementById('install-prompt');
        if (installPrompt) {
            installPrompt.classList.add('show');
        }
    }
});

window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    const installPrompt = document.getElementById('install-prompt');
    if (installPrompt) installPrompt.classList.remove('show');
    localStorage.setItem('mindcalc_installed', 'true');
    showInstallSuccess();
});

function showInstallSuccess() {
    const toast = document.createElement('div');
    toast.className = 'install-toast';
    toast.innerHTML = i18n.currentLang === 'ar' 
        ? '✅ تم تثبيت MindCalc بنجاح!' 
        : '✅ MindCalc installed successfully!';
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function showIOSInstallInstructions() {
    const modal = document.getElementById('ios-install-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

function hideIOSInstallInstructions() {
    const modal = document.getElementById('ios-install-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// ==================== MAIN APP ====================
class MindCalcApp {
    constructor() {
        this.currentExpr = '';
        this.currentResult = null;
        this.currentStrategy = null;
        this.hasCalculated = false;
        this.isPracticeMode = false;
        this.practiceLevel = 1;
        this.practiceScore = 0;
        this.currentQuestion = null;
        this.practiceAnswered = false;
        // Solve yourself mode
        this.solveMode = false;
        this.solveCurrentStep = 0;
        this.solveStrategy = null;
        this.solveStepInputs = [];
        this.init();
    }
    init() {
        this.cacheElements();
        this.bindEvents();
        this.loadSettings();
        checkInstallEligibility();
    }
    cacheElements() {
        this.expressionEl = document.getElementById('expression');
        this.resultEl = document.getElementById('result');
        this.explainBtn = document.getElementById('explain-btn');
        this.solveYourselfBtn = document.getElementById('solve-yourself-btn');
        this.explanationSection = document.getElementById('explanation-section');
        this.strategyBadge = document.getElementById('strategy-badge');
        this.stepsArea = document.getElementById('steps-area');
        this.historyModal = document.getElementById('history-modal');
        this.historyToggle = document.getElementById('history-toggle');
        this.historyNavCard = document.getElementById('history-nav-card');
        this.historyModalClose = document.getElementById('history-modal-close');
        this.historyList = document.getElementById('history-list');
        this.clearHistoryBtn = document.getElementById('clear-history');
        this.mainView = document.getElementById('main-view');
        this.practiceView = document.getElementById('practice-view');
        this.practiceToggle = document.getElementById('practice-toggle');
        this.practiceNavCard = document.getElementById('practice-nav-card');
        this.backToCalc = document.getElementById('back-to-calc');
        this.practiceScoreEl = document.getElementById('practice-score');
        this.questionText = document.getElementById('question-text');
        this.practiceAnswer = document.getElementById('practice-answer');
        this.practiceSubmit = document.getElementById('practice-submit');
        this.practiceNext = document.getElementById('practice-next');
        this.practiceStart = document.getElementById('practice-start');
        this.practiceFeedback = document.getElementById('practice-feedback');
        this.practiceExplanationArea = document.getElementById('practice-explanation-area');
        // Solve modal
        this.solveModal = document.getElementById('solve-modal');
        this.solveModalBody = document.getElementById('solve-modal-body');
        this.solveModalClose = document.getElementById('solve-modal-close');
        this.solveCheck = document.getElementById('solve-check');
        this.solveNextStep = document.getElementById('solve-next-step');
        this.solveProgress = document.getElementById('solve-progress');
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
        // Menu elements
        this.menuBtn = document.getElementById('menu-btn');
        this.menuDropdown = document.getElementById('menu-dropdown');
        this.menuSettings = document.getElementById('menu-settings');
        this.menuHistory = document.getElementById('menu-history');
        this.menuPractice = document.getElementById('menu-practice');
    }
    bindEvents() {
        document.querySelectorAll('.calc-buttons .btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleCalcButton(e));
        });
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
        this.explainBtn.addEventListener('click', () => this.showExplanation());
        this.solveYourselfBtn.addEventListener('click', () => this.openSolveModal());
        document.querySelectorAll('.demo-chip').forEach(chip => {
            chip.addEventListener('click', (e) => this.loadDemo(e.target.dataset.expr));
        });
        this.historyToggle.addEventListener('click', () => this.openHistoryModal());
        this.historyNavCard.addEventListener('click', () => this.openHistoryModal());
        this.historyModalClose.addEventListener('click', () => this.closeHistoryModal());
        this.historyModal.addEventListener('click', (e) => { if (e.target === this.historyModal) this.closeHistoryModal(); });
        this.clearHistoryBtn.addEventListener('click', () => this.clearHistory());
        this.practiceToggle.addEventListener('click', () => this.togglePracticeMode());
        this.practiceNavCard.addEventListener('click', () => this.togglePracticeMode());
        this.backToCalc.addEventListener('click', () => this.togglePracticeMode());
        this.practiceStart.addEventListener('click', () => this.startPractice());
        this.practiceSubmit.addEventListener('click', () => this.checkPracticeAnswer());
        this.practiceNext.addEventListener('click', () => this.nextPracticeQuestion());
        this.practiceAnswer.addEventListener('keypress', (e) => { 
            if (e.key === 'Enter') {
                if (this.practiceAnswered) {
                    this.nextPracticeQuestion();
                } else {
                    this.checkPracticeAnswer();
                }
            }
        });
        document.querySelectorAll('.level-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectLevel(e.target.dataset.level));
        });
        // Solve modal events
        this.solveModalClose.addEventListener('click', () => this.closeSolveModal());
        this.solveModal.addEventListener('click', (e) => { if (e.target === this.solveModal) this.closeSolveModal(); });
        this.solveCheck.addEventListener('click', () => this.checkSolveStep());
        this.solveNextStep.addEventListener('click', () => this.nextSolveStep());
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        this.langToggle.addEventListener('click', () => this.toggleLanguage());
        this.settingsBtn.addEventListener('click', () => this.openSettings());
        this.modalClose.addEventListener('click', () => this.closeSettings());
        this.themeToggleModal.addEventListener('click', () => this.toggleTheme());
        this.defaultSpeed.addEventListener('change', (e) => {
            storage.updateSetting('defaultSpeed', parseFloat(e.target.value));
        });
        this.settingsModal.addEventListener('click', (e) => { if (e.target === this.settingsModal) this.closeSettings(); });

        // Menu button events
        if (this.menuBtn) {
            this.menuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMenu();
            });
        }
        if (this.menuSettings) {
            this.menuSettings.addEventListener('click', () => {
                this.closeMenu();
                this.openSettings();
            });
        }
        if (this.menuHistory) {
            this.menuHistory.addEventListener('click', () => {
                this.closeMenu();
                this.openHistoryModal();
            });
        }
        if (this.menuPractice) {
            this.menuPractice.addEventListener('click', () => {
                this.closeMenu();
                this.togglePracticeMode();
            });
        }
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.menuDropdown && !this.menuDropdown.contains(e.target) && e.target !== this.menuBtn) {
                this.closeMenu();
            }
        });

        if (this.installYes) {
            this.installYes.addEventListener('click', () => {
                if (isIOS) {
                    showIOSInstallInstructions();
                    if (this.installPrompt) this.installPrompt.classList.remove('show');
                } else if (deferredPrompt) {
                    deferredPrompt.prompt();
                    deferredPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            localStorage.setItem('mindcalc_installed', 'true');
                            showInstallSuccess();
                        }
                        deferredPrompt = null;
                    });
                    if (this.installPrompt) this.installPrompt.classList.remove('show');
                }
            });
        }
        if (this.installNo) {
            this.installNo.addEventListener('click', () => {
                localStorage.setItem('mindcalc_install_dismissed', 'true');
                if (this.installPrompt) this.installPrompt.classList.remove('show');
            });
        }
        const iosClose = document.getElementById('ios-install-close');
        if (iosClose) {
            iosClose.addEventListener('click', hideIOSInstallInstructions);
        }
        const iosModal = document.getElementById('ios-install-modal');
        if (iosModal) {
            iosModal.addEventListener('click', (e) => {
                if (e.target === iosModal) hideIOSInstallInstructions();
            });
        }
    }

    // ===== MENU =====
    toggleMenu() {
        if (this.menuDropdown) {
            this.menuDropdown.classList.toggle('active');
        }
    }
    closeMenu() {
        if (this.menuDropdown) {
            this.menuDropdown.classList.remove('active');
        }
    }

    toggleLanguage() {
        i18n.toggleLanguage();
        if (this.currentStrategy) {
            this.currentStrategy = strategyEngine.analyze(this.currentExpr);
            if (this.currentStrategy) {
                this.strategyBadge.textContent = this.currentStrategy.name;
                this.renderExplanation();
            }
        }
        this.renderHistory();
    }
    handleCalcButton(e) {
        const btn = e.currentTarget;
        const number = btn.dataset.number;
        const action = btn.dataset.action;

        // If we already calculated and user presses a number, start fresh
        if (this.hasCalculated && number !== undefined) {
            this.currentExpr = '';
            this.currentResult = null;
            this.hasCalculated = false;
            this.hideExplanation();
        }

        if (number !== undefined) this.appendNumber(number);
        else if (action) this.handleAction(action);
    }
    handleKeyboard(e) {
        const key = e.key;

        // If we already calculated and user presses a number, start fresh
        if (this.hasCalculated && (key >= '0' && key <= '9')) {
            this.currentExpr = '';
            this.currentResult = null;
            this.hasCalculated = false;
            this.hideExplanation();
        }

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
            case 'ac': 
                this.currentExpr = ''; 
                this.currentResult = null; 
                this.hasCalculated = false;
                this.hideExplanation(); 
                break;
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
            this.hasCalculated = true;
            const formattedResult = mathEngine.formatNumber(result);
            this.resultEl.textContent = formattedResult;
            this.explainBtn.disabled = false;
            this.solveYourselfBtn.disabled = false;
            storage.addHistory(this.currentExpr, formattedResult);
        } catch (err) {
            const errorMap = { 'division_by_zero': 'error_div_zero', 'empty_expression': 'error_empty', 'invalid_input': 'error_invalid', 'mismatched_parens': 'error_parens', 'invalid_expression': 'error_expr' };
            const key = errorMap[err.message] || 'error_calc';
            this.resultEl.textContent = i18n.get(key);
            this.resultEl.style.color = 'var(--danger)';
            setTimeout(() => { this.resultEl.style.color = ''; }, 2000);
            this.explainBtn.disabled = true;
            this.solveYourselfBtn.disabled = true;
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
        this.renderExplanation();
    }
    renderExplanation() {
        if (!this.currentStrategy) return;
        this.stepsArea.innerHTML = '';
        this.currentStrategy.steps.forEach((s, i) => {
            const stepEl = document.createElement('div');
            stepEl.className = 'step-item';
            if (s.highlight !== false) stepEl.classList.add('highlight');
            if (s.isFinal) stepEl.classList.add('final');
            const numSpan = document.createElement('span');
            numSpan.className = 'step-number';
            numSpan.textContent = i + 1;
            stepEl.appendChild(numSpan);
            const textSpan = document.createElement('span');
            textSpan.textContent = s.text;
            stepEl.appendChild(textSpan);
            this.stepsArea.appendChild(stepEl);
        });
    }
    hideExplanation() {
        this.explanationSection.style.display = 'none';
        this.currentStrategy = null;
    }
    loadDemo(expr) {
        this.currentExpr = expr;
        this.hasCalculated = false;
        this.updateDisplay();
        this.calculate();
        setTimeout(() => { this.showExplanation(); }, 300);
    }

    // ===== SOLVE YOURSELF MODE (One step at a time) =====
    openSolveModal() {
        if (!this.currentExpr || !this.currentResult) return;
        this.solveStrategy = strategyEngine.analyze(this.currentExpr);
        if (!this.solveStrategy) return;
        this.solveCurrentStep = 0;
        this.solveStepInputs = [];
        this.solveMode = true;
        this.renderSolveModal();
        this.solveModal.classList.add('active');
    }
    closeSolveModal() {
        this.solveModal.classList.remove('active');
        this.solveMode = false;
        this.solveCurrentStep = 0;
        this.solveStrategy = null;
        this.solveStepInputs = [];
    }
    renderSolveModal() {
        if (!this.solveStrategy) return;
        this.solveModalBody.innerHTML = '';

        // Show ONLY the current step (not all steps)
        const step = this.solveStrategy.steps[this.solveCurrentStep];
        if (!step) return;

        const stepDiv = document.createElement('div');
        stepDiv.className = 'solve-step active-step';

        // Step indicator
        const stepIndicator = document.createElement('div');
        stepIndicator.className = 'solve-step-indicator';
        stepIndicator.textContent = i18n.get('step_progress', {
            current: this.solveCurrentStep + 1,
            total: this.solveStrategy.steps.length
        });
        stepDiv.appendChild(stepIndicator);

        const questionDiv = document.createElement('div');
        questionDiv.className = 'solve-step-question';
        questionDiv.textContent = step.text;
        stepDiv.appendChild(questionDiv);

        if (step.answer !== null && !step.isFinal) {
            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'solve-step-input';
            input.placeholder = i18n.get('enter_answer');
            input.dataset.stepIndex = this.solveCurrentStep;
            input.dataset.expected = step.answer;
            input.disabled = false;
            setTimeout(() => input.focus(), 100);
            stepDiv.appendChild(input);
            this.solveStepInputs = [input];

            // Feedback area
            const feedback = document.createElement('div');
            feedback.className = 'solve-step-feedback';
            feedback.id = `solve-feedback-${this.solveCurrentStep}`;
            stepDiv.appendChild(feedback);
        }

        this.solveModalBody.appendChild(stepDiv);
        this.updateSolveButtons();
    }
    updateSolveButtons() {
        const currentStep = this.solveStrategy.steps[this.solveCurrentStep];
        if (!currentStep) return;

        if (currentStep.answer === null || currentStep.isFinal) {
            // This step has no answer to check, just show next
            this.solveCheck.disabled = true;
            this.solveCheck.style.display = 'none';
            this.solveNextStep.disabled = false;
            this.solveNextStep.style.display = 'inline-block';
        } else {
            this.solveCheck.disabled = false;
            this.solveCheck.style.display = 'inline-block';
            this.solveNextStep.disabled = true;
            this.solveNextStep.style.display = 'none';
        }

        // If last step
        if (this.solveCurrentStep >= this.solveStrategy.steps.length - 1) {
            this.solveNextStep.textContent = i18n.get('next');
        } else {
            this.solveNextStep.textContent = i18n.get('next_step');
        }
    }
    checkSolveStep() {
        const currentStep = this.solveStrategy.steps[this.solveCurrentStep];
        if (!currentStep || currentStep.answer === null) return;

        const input = this.solveModalBody.querySelector(`input[data-step-index="${this.solveCurrentStep}"]`);
        if (!input) return;

        const userAnswer = parseFloat(input.value);
        const expected = currentStep.answer;
        const feedback = document.getElementById(`solve-feedback-${this.solveCurrentStep}`);

        if (userAnswer === expected) {
            input.classList.add('correct');
            input.classList.remove('wrong');
            input.disabled = true;
            if (feedback) {
                feedback.textContent = i18n.get('correct');
                feedback.className = 'solve-step-feedback correct';
            }
            this.solveCheck.disabled = true;
            this.solveCheck.style.display = 'none';
            this.solveNextStep.disabled = false;
            this.solveNextStep.style.display = 'inline-block';
            this.solveNextStep.focus();
        } else {
            input.classList.add('wrong');
            input.classList.remove('correct');
            if (feedback) {
                feedback.textContent = i18n.get('wrong', {answer: expected});
                feedback.className = 'solve-step-feedback wrong';
            }
        }
    }
    nextSolveStep() {
        this.solveCurrentStep++;
        if (this.solveCurrentStep >= this.solveStrategy.steps.length) {
            // All steps done
            this.closeSolveModal();
            return;
        }
        this.renderSolveModal();
    }

    // ===== HISTORY MODAL =====
    openHistoryModal() {
        this.renderHistory();
        this.historyModal.classList.add('active');
    }
    closeHistoryModal() {
        this.historyModal.classList.remove('active');
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
                this.hasCalculated = true;
                this.updateDisplay();
                this.resultEl.textContent = item.result;
                this.explainBtn.disabled = false;
                this.solveYourselfBtn.disabled = false;
                this.closeHistoryModal();
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

    // ===== PRACTICE MODE =====
    togglePracticeMode() {
        this.isPracticeMode = !this.isPracticeMode;
        if (this.isPracticeMode) {
            this.mainView.style.display = 'none';
            this.practiceView.style.display = 'block';
            this.backToCalc.style.display = 'flex';
            this.practiceToggle.classList.add('active');
            this.practiceScore = 0;
            this.practiceScoreEl.textContent = '0';
        } else {
            this.mainView.style.display = 'block';
            this.practiceView.style.display = 'none';
            this.backToCalc.style.display = 'none';
            this.practiceToggle.classList.remove('active');
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
        this.practiceAnswered = false;
        this.questionText.textContent = i18n.get('press_start');
        this.practiceAnswer.value = '';
        this.practiceAnswer.disabled = true;
        this.practiceSubmit.disabled = true;
        this.practiceNext.disabled = true;
        this.practiceStart.style.display = 'inline-block';
        this.practiceFeedback.textContent = '';
        this.practiceFeedback.className = 'practice-feedback';
        this.practiceExplanationArea.innerHTML = '';
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
        this.practiceAnswered = false;
        this.questionText.textContent = `${this.currentQuestion.expr} = ?`;
        this.practiceAnswer.value = '';
        this.practiceAnswer.disabled = false;
        this.practiceAnswer.focus();
        this.practiceSubmit.disabled = false;
        this.practiceNext.disabled = true;
        this.practiceStart.style.display = 'none';
        this.practiceFeedback.textContent = '';
        this.practiceFeedback.className = 'practice-feedback';
        this.practiceExplanationArea.innerHTML = '';
    }
    checkPracticeAnswer() {
        if (!this.currentQuestion || this.practiceAnswered) return;
        const userAnswer = parseFloat(this.practiceAnswer.value);
        const correct = userAnswer === this.currentQuestion.answer;
        this.practiceAnswered = true;

        if (correct) {
            this.practiceScore += 10;
            this.practiceScoreEl.textContent = this.practiceScore;
            this.practiceFeedback.textContent = i18n.get('correct');
            this.practiceFeedback.className = 'practice-feedback correct';
        } else {
            this.practiceFeedback.textContent = i18n.get('wrong', {answer: this.currentQuestion.answer});
            this.practiceFeedback.className = 'practice-feedback wrong';
        }

        this.showPracticeExplanation();
        this.practiceSubmit.disabled = true;
        this.practiceNext.disabled = false;
        this.practiceNext.focus();
    }
    nextPracticeQuestion() {
        this.practiceAnswered = false;
        this.currentQuestion = this.generateQuestion();
        this.questionText.textContent = `${this.currentQuestion.expr} = ?`;
        this.practiceAnswer.value = '';
        this.practiceAnswer.disabled = false;
        this.practiceAnswer.focus();
        this.practiceSubmit.disabled = false;
        this.practiceNext.disabled = true;
        this.practiceFeedback.textContent = '';
        this.practiceFeedback.className = 'practice-feedback';
        this.practiceExplanationArea.innerHTML = '';
    }
    showPracticeExplanation() {
        const strategy = strategyEngine.analyze(this.currentQuestion.expr);
        if (!strategy) return;

        this.practiceExplanationArea.innerHTML = '';
        const expDiv = document.createElement('div');
        expDiv.className = 'practice-explanation';
        const title = document.createElement('h4');
        title.textContent = `🧠 ${strategy.name}:`;
        expDiv.appendChild(title);
        strategy.steps.forEach((step, i) => {
            const stepEl = document.createElement('div');
            stepEl.className = 'step-item';
            if (step.highlight !== false) stepEl.classList.add('highlight');
            const numSpan = document.createElement('span');
            numSpan.className = 'step-number';
            numSpan.textContent = i + 1;
            stepEl.appendChild(numSpan);
            const textSpan = document.createElement('span');
            textSpan.textContent = step.text;
            stepEl.appendChild(textSpan);
            expDiv.appendChild(stepEl);
        });
        this.practiceExplanationArea.appendChild(expDiv);
    }
    loadSettings() {
        const settings = storage.getSettings();
        if (settings.theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            this.updateThemeIcon();
        }
        this.defaultSpeed.value = settings.defaultSpeed || 1;
    }
    toggleTheme() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) { 
            document.documentElement.removeAttribute('data-theme'); 
            storage.updateSetting('theme', 'light'); 
        }
        else { 
            document.documentElement.setAttribute('data-theme', 'dark'); 
            storage.updateSetting('theme', 'dark'); 
        }
        this.updateThemeIcon();
    }
    updateThemeIcon() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const icon = this.themeToggle.querySelector('.theme-icon');
        if (icon) icon.textContent = isDark ? '☀️' : '🌙';
        // Also update modal theme icon if exists
        const modalIcon = document.querySelector('#theme-toggle-modal .theme-icon');
        if (modalIcon) modalIcon.textContent = isDark ? '☀️' : '🌙';
    }
    openSettings() { this.settingsModal.classList.add('active'); }
    closeSettings() { this.settingsModal.classList.remove('active'); }
}
document.addEventListener('DOMContentLoaded', () => { window.app = new MindCalcApp(); });
