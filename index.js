"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __asyncDelegator = (this && this.__asyncDelegator) || function (o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
var core = require("@actions/core");
var github = require("@actions/github");
var fs_1 = require("fs");
var fs_2 = require("fs");
var https = require("https");
var path = require("path");
var util = require("util");
var child_process_1 = require("child_process");
var process_1 = require("process");
var asyncExec = util.promisify(child_process_1.exec);
var certificateFileName = process_1.env['TEMP'] + '\\certificate.pfx';
var nugetFileName = process_1.env['TEMP'] + '\\nuget.exe';
var timestampUrl = 'http://timestamp.digicert.com';
var signtool = 'C:/Program Files (x86)/Windows Kits/10/bin/10.0.17763.0/x86/signtool.exe';
var signtoolFileExtensions = [
    '.dll', '.exe', '.sys', '.vxd',
    '.msix', '.msixbundle', '.appx',
    '.appxbundle', '.msi', '.msp',
    '.msm', '.cab', '.ps1', '.psm1'
];
function sleep(seconds) {
    if (seconds > 0)
        console.log("Waiting for " + seconds + " seconds.");
    return new Promise(function (resolve) { return setTimeout(resolve, seconds * 1000); });
}
function createCertificatePfx() {
    return __awaiter(this, void 0, void 0, function () {
        var base64Certificate, certificate;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    base64Certificate = core.getInput('certificate');
                    certificate = Buffer.from(base64Certificate, 'base64');
                    if (certificate.length == 0) {
                        console.log('The value for "certificate" is not set.');
                        return [2 /*return*/, false];
                    }
                    console.log("Writing " + certificate.length + " bytes to " + certificateFileName + ".");
                    return [4 /*yield*/, fs_1.promises.writeFile(certificateFileName, certificate)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
function downloadNuGet() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    if (fs_2.existsSync(nugetFileName)) {
                        resolve();
                        return;
                    }
                    console.log("Downloading nuget.exe.");
                    var file = fs_2.createWriteStream(nugetFileName);
                    https.get('https://dist.nuget.org/win-x86-commandline/latest/nuget.exe', function (response) {
                        response.pipe(file);
                        file.on('finish', function () {
                            file.close();
                            resolve();
                        });
                    });
                })];
        });
    });
}
function signWithSigntool(fileName) {
    return __awaiter(this, void 0, void 0, function () {
        var stdout, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, asyncExec("\"" + signtool + "\" sign /f " + certificateFileName + " /tr " + timestampUrl + " /td sha256 /fd sha256 " + fileName)];
                case 1:
                    stdout = (_a.sent()).stdout;
                    console.log(stdout);
                    return [2 /*return*/, true];
                case 2:
                    err_1 = _a.sent();
                    console.log(err_1.stdout);
                    console.log(err_1.stderr);
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function signNupkg(fileName) {
    return __awaiter(this, void 0, void 0, function () {
        var stdout, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, downloadNuGet()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, asyncExec("\"" + nugetFileName + "\" sign " + fileName + " -CertificatePath " + certificateFileName + " -Timestamper " + timestampUrl)];
                case 3:
                    stdout = (_a.sent()).stdout;
                    console.log(stdout);
                    return [2 /*return*/, true];
                case 4:
                    err_2 = _a.sent();
                    console.log(err_2.stdout);
                    console.log(err_2.stderr);
                    return [2 /*return*/, false];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function trySignFile(fileName) {
    return __awaiter(this, void 0, void 0, function () {
        var extension, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Signing " + fileName + ".");
                    extension = path.extname(fileName);
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < 10)) return [3 /*break*/, 7];
                    return [4 /*yield*/, sleep(i)];
                case 2:
                    _a.sent();
                    if (!signtoolFileExtensions.includes(extension)) return [3 /*break*/, 4];
                    return [4 /*yield*/, signWithSigntool(fileName)];
                case 3:
                    if (_a.sent())
                        return [2 /*return*/];
                    return [3 /*break*/, 6];
                case 4:
                    if (!(extension == '.nupkg')) return [3 /*break*/, 6];
                    return [4 /*yield*/, signNupkg(fileName)];
                case 5:
                    if (_a.sent())
                        return [2 /*return*/];
                    _a.label = 6;
                case 6:
                    i++;
                    return [3 /*break*/, 1];
                case 7: throw "Failed to sign '" + fileName + "'.";
            }
        });
    });
}
function getFiles(folder, recursive) {
    return __asyncGenerator(this, arguments, function getFiles_1() {
        var files, _i, files_1, file, fullPath, stat, extension;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __await(fs_1.promises.readdir(folder))];
                case 1:
                    files = _a.sent();
                    _i = 0, files_1 = files;
                    _a.label = 2;
                case 2:
                    if (!(_i < files_1.length)) return [3 /*break*/, 11];
                    file = files_1[_i];
                    fullPath = folder + "/" + file;
                    return [4 /*yield*/, __await(fs_1.promises.stat(fullPath))];
                case 3:
                    stat = _a.sent();
                    if (!stat.isFile()) return [3 /*break*/, 7];
                    extension = path.extname(file);
                    if (!(signtoolFileExtensions.includes(extension) || extension == '.nupkg')) return [3 /*break*/, 6];
                    return [4 /*yield*/, __await(fullPath)];
                case 4: return [4 /*yield*/, _a.sent()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [3 /*break*/, 10];
                case 7:
                    if (!(stat.isDirectory() && recursive)) return [3 /*break*/, 10];
                    return [5 /*yield**/, __values(__asyncDelegator(__asyncValues(getFiles(fullPath, recursive))))];
                case 8: return [4 /*yield*/, __await.apply(void 0, [_a.sent()])];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    _i++;
                    return [3 /*break*/, 2];
                case 11: return [2 /*return*/];
            }
        });
    });
}
function signFiles() {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {
        var folder, recursive, _b, _c, file, e_1_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    folder = core.getInput('folder', { required: true });
                    recursive = core.getInput('recursive') == 'true';
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 7, 8, 13]);
                    _b = __asyncValues(getFiles(folder, recursive));
                    _d.label = 2;
                case 2: return [4 /*yield*/, _b.next()];
                case 3:
                    if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 6];
                    file = _c.value;
                    return [4 /*yield*/, trySignFile(file)];
                case 4:
                    _d.sent();
                    _d.label = 5;
                case 5: return [3 /*break*/, 2];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _d.trys.push([8, , 11, 12]);
                    if (!(_c && !_c.done && (_a = _b["return"]))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _a.call(_b)];
                case 9:
                    _d.sent();
                    _d.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13: return [2 /*return*/];
            }
        });
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var nameToGreet, time, payload;
        return __generator(this, function (_a) {
            try {
                nameToGreet = core.getInput('who-to-greet');
                console.log("Hello " + nameToGreet + "!");
                time = (new Date()).toTimeString();
                core.setOutput("time", time);
                payload = JSON.stringify(github.context.payload, undefined, 2);
                console.log("The event payload: " + payload);
            }
            catch (err) {
                core.setFailed("Action failed with error: " + err);
            }
            return [2 /*return*/];
        });
    });
}
run();
