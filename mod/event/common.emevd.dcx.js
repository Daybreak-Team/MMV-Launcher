// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeEvent(0, 1600);
    $InitializeEvent(0, 1601);
    $InitializeEvent(0, 1610);
    if (MissionActive(101)) {
        $InitializeCommonEvent(0, 90085010, 101, 8325, 12030, Hero.Wylder);
        if (12210 != 0) {
            $InitializeCommonEvent(0, 90085028, 101, 8325, 8327, 12210, Hero.Wylder);
        }
        if (0 == 1) {
            $InitializeCommonEvent(0, 90085024, 101, 8327, 8325);
        }
        GotoIf(S1, 1 == 0);
        $InitializeCommonEvent(0, 90085025, 101, 9206, 8325, Hero.Wylder);
        GotoIf(S0, 1 != 1);
        $InitializeCommonEvent(0, 90085026, 101, 8325, 1, Hero.Wylder);
    }
S0:
    if (1 == 2) {
        $InitializeCommonEvent(0, 90085026, 101, 8325, 0, Hero.Wylder);
    }
S1:
    if (MissionActive(102)) {
        $InitializeCommonEvent(0, 90085010, 102, 8330, 12030, Hero.Wylder);
        if (12211 != 0) {
            $InitializeCommonEvent(0, 90085028, 102, 8330, 8332, 12211, Hero.Wylder);
        }
        if (0 == 1) {
            $InitializeCommonEvent(0, 90085024, 102, 8332, 8330);
        }
        GotoIf(S3, 1 == 0);
        $InitializeCommonEvent(0, 90085025, 102, 9207, 8330, Hero.Wylder);
        GotoIf(S2, 1 != 1);
        $InitializeCommonEvent(0, 90085026, 102, 8330, 1, Hero.Wylder);
    }
S2:
    if (1 == 2) {
        $InitializeCommonEvent(0, 90085026, 102, 8330, 0, Hero.Wylder);
    }
S3:
    if (MissionActive(202)) {
        $InitializeCommonEvent(0, 90085010, 202, 8355, 12035, Hero.Guardian);
        if (0 != 0) {
            $InitializeCommonEvent(0, 90085028, 202, 8355, 8357, 0, Hero.Guardian);
        }
        if (1 == 1) {
            $InitializeCommonEvent(0, 90085024, 202, 8357, 8355);
        }
        GotoIf(S5, 1 == 0);
        $InitializeCommonEvent(0, 90085025, 202, 9208, 8355, Hero.Guardian);
        GotoIf(S4, 1 != 1);
        $InitializeCommonEvent(0, 90085026, 202, 8355, 1, Hero.Guardian);
    }
S4:
    if (1 == 2) {
        $InitializeCommonEvent(0, 90085026, 202, 8355, 0, Hero.Guardian);
    }
S5:
    if (MissionActive(203)) {
        $InitializeCommonEvent(0, 90085010, 203, 8360, 12035, Hero.Guardian);
        if (0 != 0) {
            $InitializeCommonEvent(0, 90085028, 203, 8360, 0, 0, Hero.Guardian);
        }
        if (0 == 1) {
            $InitializeCommonEvent(0, 90085024, 203, 0, 8360);
        }
        GotoIf(S7, 1 == 0);
        $InitializeCommonEvent(0, 90085025, 203, 9200, 8360, Hero.Guardian);
        GotoIf(S6, 1 != 1);
        $InitializeCommonEvent(0, 90085026, 203, 8360, 1, Hero.Guardian);
    }
S6:
    if (1 == 2) {
        $InitializeCommonEvent(0, 90085026, 203, 8360, 0, Hero.Guardian);
    }
S7:
    if (MissionActive(302)) {
        $InitializeCommonEvent(0, 90085010, 302, 8380, 12040, Hero.Ironeye);
        if (0 != 0) {
            $InitializeCommonEvent(0, 90085028, 302, 8380, 8382, 0, Hero.Ironeye);
        }
        if (1 == 1) {
            $InitializeCommonEvent(0, 90085024, 302, 8382, 8380);
        }
        GotoIf(S9, 2 == 0);
        $InitializeCommonEvent(0, 90085025, 302, 9209, 8380, Hero.Ironeye);
        GotoIf(S8, 2 != 1);
        $InitializeCommonEvent(0, 90085026, 302, 8380, 1, Hero.Ironeye);
    }
S8:
    if (2 == 2) {
        $InitializeCommonEvent(0, 90085026, 302, 8380, 0, Hero.Ironeye);
    }
S9:
    if (MissionActive(303)) {
        $InitializeCommonEvent(0, 90085010, 303, 8385, 12040, Hero.Ironeye);
        if (0 != 0) {
            $InitializeCommonEvent(0, 90085028, 303, 8385, 0, 0, Hero.Ironeye);
        }
        if (0 == 1) {
            $InitializeCommonEvent(0, 90085024, 303, 0, 8385);
        }
        GotoIf(S11, 0 == 0);
        $InitializeCommonEvent(0, 90085025, 303, 9211, 8385, Hero.Ironeye);
        GotoIf(S10, 0 != 1);
        $InitializeCommonEvent(0, 90085026, 303, 8385, 1, Hero.Ironeye);
    }
S10:
    if (0 == 2) {
        $InitializeCommonEvent(0, 90085026, 303, 8385, 0, Hero.Ironeye);
    }
S11:
    if (MissionActive(401)) {
        $InitializeCommonEvent(0, 90085010, 401, 8400, 12045, Hero.Duchess);
        if (12212 != 0) {
            $InitializeCommonEvent(0, 90085028, 401, 8400, 8402, 12212, Hero.Duchess);
        }
        if (0 == 1) {
            $InitializeCommonEvent(0, 90085024, 401, 8402, 8400);
        }
        GotoIf(S13, 1 == 0);
        $InitializeCommonEvent(0, 90085025, 401, 9212, 8400, Hero.Duchess);
        GotoIf(S12, 1 != 1);
        $InitializeCommonEvent(0, 90085026, 401, 8400, 1, Hero.Duchess);
    }
S12:
    if (1 == 2) {
        $InitializeCommonEvent(0, 90085026, 401, 8400, 0, Hero.Duchess);
    }
S13:
    if (MissionActive(403)) {
        $InitializeCommonEvent(0, 90085010, 403, 8410, 12045, Hero.Duchess);
        if (12213 != 0) {
            $InitializeCommonEvent(0, 90085028, 403, 8410, 8412, 12213, Hero.Duchess);
        }
        if (0 == 1) {
            $InitializeCommonEvent(0, 90085024, 403, 8412, 8410);
        }
        GotoIf(S15, 1 == 0);
        $InitializeCommonEvent(0, 90085025, 403, 9213, 8410, Hero.Duchess);
        GotoIf(S14, 1 != 1);
        $InitializeCommonEvent(0, 90085026, 403, 8410, 1, Hero.Duchess);
    }
S14:
    if (1 == 2) {
        $InitializeCommonEvent(0, 90085026, 403, 8410, 0, Hero.Duchess);
    }
S15:
    if (MissionActive(601)) {
        $InitializeCommonEvent(0, 90085010, 601, 8450, 12055, Hero.Revenant);
        if (0 != 0) {
            $InitializeCommonEvent(0, 90085028, 601, 8450, 0, 0, Hero.Revenant);
        }
        if (0 == 1) {
            $InitializeCommonEvent(0, 90085024, 601, 0, 8450);
        }
        GotoIf(S17, 0 == 0);
        $InitializeCommonEvent(0, 90085025, 601, 9214, 8450, Hero.Revenant);
        GotoIf(S16, 0 != 1);
        $InitializeCommonEvent(0, 90085026, 601, 8450, 1, Hero.Revenant);
    }
S16:
    if (0 == 2) {
        $InitializeCommonEvent(0, 90085026, 601, 8450, 0, Hero.Revenant);
    }
S17:
    if (MissionActive(701)) {
        $InitializeCommonEvent(0, 90085010, 701, 8475, 12060, Hero.Recluse);
        if (0 != 0) {
            $InitializeCommonEvent(0, 90085028, 701, 8475, 8477, 0, Hero.Recluse);
        }
        if (1 == 1) {
            $InitializeCommonEvent(0, 90085024, 701, 8477, 8475);
        }
        GotoIf(S19, 2 == 0);
        $InitializeCommonEvent(0, 90085025, 701, 9216, 8475, Hero.Recluse);
        GotoIf(S18, 2 != 1);
        $InitializeCommonEvent(0, 90085026, 701, 8475, 1, Hero.Recluse);
    }
S18:
    if (2 == 2) {
        $InitializeCommonEvent(0, 90085026, 701, 8475, 0, Hero.Recluse);
    }
S19:
    if (MissionActive(802)) {
        $InitializeCommonEvent(0, 90085010, 802, 8505, 12065, Hero.Executor);
        if (12215 != 0) {
            $InitializeCommonEvent(0, 90085028, 802, 8505, 8507, 12215, Hero.Executor);
        }
        if (0 == 1) {
            $InitializeCommonEvent(0, 90085024, 802, 8507, 8505);
        }
        GotoIf(S21, 1 == 0);
        $InitializeCommonEvent(0, 90085025, 802, 9217, 8505, Hero.Executor);
        GotoIf(S20, 1 != 1);
        $InitializeCommonEvent(0, 90085026, 802, 8505, 1, Hero.Executor);
    }
S20:
    if (1 == 2) {
        $InitializeCommonEvent(0, 90085026, 802, 8505, 0, Hero.Executor);
    }
S21:
    if (MissionActive(803)) {
        $InitializeCommonEvent(0, 90085010, 803, 8510, 12065, Hero.Executor);
        if (12214 != 0) {
            $InitializeCommonEvent(0, 90085028, 803, 8510, 8512, 12214, Hero.Executor);
        }
        if (0 == 1) {
            $InitializeCommonEvent(0, 90085024, 803, 8512, 8510);
        }
        GotoIf(S23, 1 == 0);
        $InitializeCommonEvent(0, 90085025, 803, 9218, 8510, Hero.Executor);
        GotoIf(S22, 1 != 1);
        $InitializeCommonEvent(0, 90085026, 803, 8510, 1, Hero.Executor);
    }
S22:
    if (1 == 2) {
        $InitializeCommonEvent(0, 90085026, 803, 8510, 0, Hero.Executor);
    }
S23:
    if (MissionActive(901)) {
        $InitializeCommonEvent(0, 90085010, 901, 8525, 120000, Hero.Scholar);
        if (0 != 0) {
            $InitializeCommonEvent(0, 90085028, 901, 8525, 0, 0, Hero.Scholar);
        }
        if (0 == 1) {
            $InitializeCommonEvent(0, 90085024, 901, 0, 8525);
        }
        GotoIf(S25, 1 == 0);
        $InitializeCommonEvent(0, 90085025, 901, 9280, 8525, Hero.Scholar);
        GotoIf(S24, 1 != 1);
        $InitializeCommonEvent(0, 90085026, 901, 8525, 1, Hero.Scholar);
    }
S24:
    if (1 == 2) {
        $InitializeCommonEvent(0, 90085026, 901, 8525, 0, Hero.Scholar);
    }
S25:
    if (MissionActive(902)) {
        $InitializeCommonEvent(0, 90085010, 902, 8530, 120000, Hero.Scholar);
        if (0 != 0) {
            $InitializeCommonEvent(0, 90085028, 902, 8530, 0, 0, Hero.Scholar);
        }
        if (0 == 1) {
            $InitializeCommonEvent(0, 90085024, 902, 0, 8530);
        }
        GotoIf(S27, 0 == 0);
        $InitializeCommonEvent(0, 90085025, 902, 9281, 8530, Hero.Scholar);
        GotoIf(S26, 0 != 1);
        $InitializeCommonEvent(0, 90085026, 902, 8530, 1, Hero.Scholar);
    }
S26:
    if (0 == 2) {
        $InitializeCommonEvent(0, 90085026, 902, 8530, 0, Hero.Scholar);
    }
S27:
    if (MissionActive(1001)) {
        $InitializeCommonEvent(0, 90085010, 1001, 8535, 120005, Hero.Undertaker);
        if (120006 != 0) {
            $InitializeCommonEvent(0, 90085028, 1001, 8535, 0, 120006, Hero.Undertaker);
        }
        if (0 == 1) {
            $InitializeCommonEvent(0, 90085024, 1001, 0, 8535);
        }
        GotoIf(S29, 1 == 0);
        $InitializeCommonEvent(0, 90085025, 1001, 9282, 8535, Hero.Undertaker);
        GotoIf(S28, 1 != 1);
        $InitializeCommonEvent(0, 90085026, 1001, 8535, 1, Hero.Undertaker);
    }
S28:
    if (1 == 2) {
        $InitializeCommonEvent(0, 90085026, 1001, 8535, 0, Hero.Undertaker);
    }
S29:
    if (MissionActive(302)) {
        SetNetworkconnectedEventFlagID(74017, ON);
    }
    if (MissionActive(203)) {
        $InitializeCommonEvent(0, 90085222, 203, 8360, 9201, 9202, 8361, Hero.Guardian);
    }
    $InitializeEvent(0, 1100);
    $InitializeEvent(0, 1101);
    $InitializeEvent(0, 1111);
    $InitializeEvent(0, 1102);
    $InitializeEvent(0, 1103);
    $InitializeEvent(0, 1113);
    $InitializeEvent(0, 1104);
    $InitializeEvent(0, 1105);
    $InitializeEvent(0, 1106);
    $InitializeEvent(0, 1116);
    $InitializeEvent(0, 1160);
    $InitializeEvent(0, 1161);
    $InitializeEvent(0, 1107);
    $InitializeEvent(0, 1120);
    $InitializeEvent(0, 1121);
    $InitializeEvent(0, 1122);
    $InitializeEvent(0, 1124);
    $InitializeEvent(0, 1125);
    $InitializeEvent(0, 1127, 1044360220, 1044360225);
    $InitializeEvent(1, 1127, 1044380230, 1044380235);
    $InitializeEvent(0, 1129);
    $InitializeEvent(0, 1131);
    $InitializeEvent(0, 1132);
    $InitializeEvent(0, 1133);
    $InitializeEvent(0, 1134);
    $InitializeEvent(0, 1143);
    $InitializeEvent(0, 1144);
    $InitializeEvent(0, 1138);
    $InitializeEvent(0, 1141);
    $InitializeEvent(0, 1142);
    $InitializeEvent(0, 1137);
    $InitializeEvent(0, 1149, 55, 5);
    $InitializeEvent(0, 1152);
    $InitializeEvent(0, 1155);
    $InitializeEvent(0, 1154, 98170, 98171, 98160, 98161, 98175);
    $InitializeEvent(0, 1145);
    $InitializeEvent(0, 1146, 80015, 80018, 95001);
    $InitializeEvent(1, 1146, 80016, 80019, 95002);
    $InitializeEvent(2, 1146, 80017, 80020, 95003);
    $InitializeEvent(0, 1148);
    $InitializeCommonEvent(0, 90035287);
    $InitializeEvent(0, 1135);
    $InitializeEvent(0, 1136);
    $InitializeEvent(0, 1139);
    $InitializeEvent(0, 1140);
    $InitializeEvent(0, 1150);
    $InitializeEvent(0, 1151);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90025000, 1027402800, 9026, 26);
        $InitializeCommonEvent(1, 90025000, 1036402800, 9027, 27);
        $InitializeCommonEvent(2, 90025000, 1056402800, 9028, 29);
        $InitializeCommonEvent(3, 90025000, 1058402800, 9029, 30);
        $InitializeCommonEvent(0, 90015472);
        $InitializeCommonEvent(0, 90015473);
        $InitializeCommonEvent(0, 90015477);
    }
    $InitializeCommonEvent(0, 99075460, 1, 70000, 70001, 70002, 70003, 70004, 70005, 70006, 70007, 70008, 70009);
    $InitializeCommonEvent(0, 99075460, 2, 70030, 70031, 70032, 70033, 70034, 70035, 70036, 70037, 70038, 70039);
    $InitializeCommonEvent(0, 99075460, 3, 70060, 70061, 70062, 70063, 70064, 70065, 70066, 70067, 70068, 70069);
    $InitializeCommonEvent(0, 99075461, 1, 70010, 70011, 70012, 70013, 70014, 70015);
    $InitializeCommonEvent(0, 99075461, 2, 70040, 70041, 70042, 70043, 70044, 70045);
    $InitializeCommonEvent(0, 99075461, 3, 70070, 70071, 70072, 70073, 70074, 70075);
    $InitializeCommonEvent(0, 99075462, 1, 70020, 70022);
    $InitializeCommonEvent(0, 99075462, 2, 70050, 70052);
    $InitializeCommonEvent(0, 99075462, 3, 70080, 70082);
    $InitializeCommonEvent(0, 99075465, 1, 19010450, 19010453, 0, 70000, 70001, 70002, 70003, 70004, 70005, 70006, 70007, 70008, 70009, 70010, 70011, 70012, 70013, 70014, 70015, 70020, 70021, 70022);
    $InitializeCommonEvent(0, 99075465, 2, 19010451, 19010454, 0, 70030, 70031, 70032, 70033, 70034, 70035, 70036, 70037, 70038, 70039, 70040, 70041, 70042, 70043, 70044, 70045, 70050, 70051, 70052);
    $InitializeCommonEvent(0, 99075465, 3, 19010452, 19010455, 0, 70060, 70061, 70062, 70063, 70064, 70065, 70066, 70067, 70068, 70069, 70070, 70071, 70072, 70073, 70074, 70075, 70080, 70081, 70082);
    $InitializeEvent(0, 1909);
    $InitializeEvent(0, 1300);
    $InitializeEvent(0, 1301);
    $InitializeEvent(0, 1302);
    if (IsPlayerNo(1)) {
        $InitializeEvent(0, 1310, 7010);
    }
    if (IsPlayerNo(2)) {
        $InitializeEvent(0, 1310, 7011);
    }
    if (IsPlayerNo(3)) {
        $InitializeEvent(0, 1310, 7012);
    }
    $InitializeEvent(0, 1108, 9019);
    $InitializeEvent(0, 1305);
    $InitializeEvent(0, 1311);
    $InitializeEvent(0, 1313);
    $InitializeEvent(0, 1312);
    $InitializeEvent(0, 1306);
    $InitializeEvent(0, 1307);
    $InitializeEvent(0, 1308);
    $InitializeEvent(0, 1309);
    $InitializeEvent(0, 1314);
    $InitializeEvent(0, 1320, 99874, 99810);
    $InitializeEvent(1, 1320, 99879, 99811);
    $InitializeEvent(0, 1325);
    $InitializeEvent(0, 1203);
    $InitializeEvent(0, 1330, 1044382790);
    $InitializeEvent(1, 1330, 1044382791);
    $InitializeEvent(2, 1330, 1044362790);
    $InitializeEvent(3, 1330, 1043382790);
    $InitializeEvent(0, 1350, 52422465);
    $InitializeEvent(1, 1350, 52402465);
    $InitializeEvent(2, 1350, 1039402745);
    $InitializeEvent(3, 1350, 1029402745);
    $InitializeEvent(5, 1350, 1046402745);
    $InitializeEvent(0, 1370, 1058402745, 1057402745);
    $InitializeEvent(0, 1340);
    $InitializeEvent(0, 1304);
    $InitializeCommonEvent(0, 90015208, 9328, 9051, 9040);
    $InitializeEvent(0, 1170);
    $InitializeEvent(1, 1520, 102, 8330, 97120, Hero.Wylder);
    $InitializeEvent(2, 1520, 202, 8355, 97220, Hero.Guardian);
    $InitializeEvent(3, 1520, 302, 8380, 97320, Hero.Ironeye);
    $InitializeEvent(4, 1520, 401, 8400, 97410, Hero.Duchess);
    $InitializeEvent(5, 1520, 403, 8410, 97430, Hero.Duchess);
    $InitializeEvent(6, 1520, 701, 8475, 97710, Hero.Recluse);
    $InitializeEvent(7, 1520, 802, 8505, 97820, Hero.Executor);
    $InitializeEvent(8, 1520, 803, 8510, 97830, Hero.Executor);
    $InitializeEvent(9, 1520, 1001, 8535, 97629, Hero.Undertaker);
    $InitializeEvent(0, 1592, 97112, 97110, 9204, Hero.Wylder, 101);
    $InitializeCommonEvent(0, 90015014, 7602, 72447);
    $InitializeCommonEvent(0, 90015014, 7602, 72448);
    $InitializeCommonEvent(0, 90015014, 7605, 72451);
    $InitializeCommonEvent(0, 90015014, 7605, 72458);
    $InitializeCommonEvent(0, 90015014, 7605, 72459);
    $InitializeEvent(0, 1500);
    $InitializeEvent(0, 1519, 72250, 7605);
    $InitializeEvent(0, 1510, 72251, 7601);
    $InitializeEvent(1, 1510, 72252, 7602);
    $InitializeEvent(2, 1510, 72253, 7603);
    $InitializeEvent(3, 1510, 72255, 7605);
    $InitializeEvent(0, 1505, 72560, 7605);
    $InitializeEvent(0, 1506, 72561, 7603);
    $InitializeCommonEvent(0, 90015019, 1027500200, 1027500700);
    $InitializeCommonEvent(0, 90015019, 1036500250, 1036500750);
    $InitializeCommonEvent(0, 90035086);
    $InitializeCommonEvent(0, 90015100, 8000, 9100, 7070001, 8120);
    $InitializeCommonEvent(1, 90015100, 8000, 9111, 7070001, 8131);
    $InitializeCommonEvent(2, 90015100, 8000, 9106, 7070001, 8126);
    $InitializeCommonEvent(3, 90015100, 8001, 9101, 7070001, 8121);
    $InitializeCommonEvent(4, 90015100, 8001, 9110, 7070001, 8130);
    $InitializeCommonEvent(5, 90015100, 8001, 9107, 7070001, 8127);
    $InitializeCommonEvent(6, 90015100, 8002, 9102, 7070001, 8122);
    $InitializeCommonEvent(7, 90015100, 8002, 9109, 7070001, 8129);
    $InitializeCommonEvent(8, 90015100, 8002, 9108, 7070001, 8128);
    $InitializeCommonEvent(9, 90015100, 8003, 9103, 7070001, 8123);
    $InitializeCommonEvent(10, 90015100, 8003, 9108, 7070001, 8128);
    $InitializeCommonEvent(11, 90015100, 8003, 9109, 7070001, 8129);
    $InitializeCommonEvent(12, 90015100, 8004, 9104, 7070001, 8124);
    $InitializeCommonEvent(13, 90015100, 8004, 9107, 7070001, 8127);
    $InitializeCommonEvent(14, 90015100, 8004, 9110, 7070001, 8130);
    $InitializeCommonEvent(15, 90015100, 8005, 9105, 7070001, 8125);
    $InitializeCommonEvent(16, 90015100, 8005, 9106, 7070001, 8126);
    $InitializeCommonEvent(17, 90015100, 8005, 9111, 7070001, 8131);
    $InitializeCommonEvent(18, 90015100, 8006, 9106, 7070001, 8126);
    $InitializeCommonEvent(19, 90015100, 8006, 9105, 7070001, 8125);
    $InitializeCommonEvent(20, 90015100, 8006, 9100, 7070001, 8120);
    $InitializeCommonEvent(21, 90015100, 8007, 9107, 7070001, 8127);
    $InitializeCommonEvent(22, 90015100, 8007, 9104, 7070001, 8124);
    $InitializeCommonEvent(23, 90015100, 8007, 9101, 7070001, 8121);
    $InitializeCommonEvent(24, 90015100, 8008, 9108, 7070001, 8128);
    $InitializeCommonEvent(25, 90015100, 8008, 9103, 7070001, 8123);
    $InitializeCommonEvent(26, 90015100, 8008, 9102, 7070001, 8122);
    $InitializeCommonEvent(27, 90015100, 8009, 9109, 7070001, 8129);
    $InitializeCommonEvent(28, 90015100, 8009, 9102, 7070001, 8122);
    $InitializeCommonEvent(29, 90015100, 8009, 9103, 7070001, 8123);
    $InitializeCommonEvent(30, 90015100, 8010, 9110, 7070001, 8130);
    $InitializeCommonEvent(31, 90015100, 8010, 9101, 7070001, 8121);
    $InitializeCommonEvent(32, 90015100, 8010, 9104, 7070001, 8124);
    $InitializeCommonEvent(33, 90015100, 8011, 9111, 7070001, 8131);
    $InitializeCommonEvent(34, 90015100, 8011, 9100, 7070001, 8120);
    $InitializeCommonEvent(35, 90015100, 8011, 9105, 7070001, 8125);
    if (EventFlag(7604)) {
        if (EventFlag(8000)) {
            $InitializeCommonEvent(40, 90015100, 8000, 9112, 0, 0);
            $InitializeCommonEvent(41, 90015100, 8000, 9113, 0, 0);
        }
        if (EventFlag(8001)) {
            $InitializeCommonEvent(42, 90015100, 8001, 9114, 0, 0);
            $InitializeCommonEvent(43, 90015100, 8001, 9115, 0, 0);
        }
        if (EventFlag(8002)) {
            $InitializeCommonEvent(44, 90015100, 8002, 9116, 0, 0);
            $InitializeCommonEvent(45, 90015100, 8002, 9117, 0, 0);
        }
        if (EventFlag(8003)) {
            $InitializeCommonEvent(46, 90015100, 8003, 9118, 0, 0);
            $InitializeCommonEvent(47, 90015100, 8003, 9119, 0, 0);
        }
        if (EventFlag(8004)) {
            $InitializeCommonEvent(48, 90015100, 8004, 9112, 0, 0);
            $InitializeCommonEvent(49, 90015100, 8004, 9114, 0, 0);
        }
        if (EventFlag(8005)) {
            $InitializeCommonEvent(50, 90015100, 8005, 9113, 0, 0);
            $InitializeCommonEvent(51, 90015100, 8005, 9115, 0, 0);
        }
        if (EventFlag(8006)) {
            $InitializeCommonEvent(52, 90015100, 8006, 9116, 0, 0);
            $InitializeCommonEvent(53, 90015100, 8006, 9118, 0, 0);
        }
        if (EventFlag(8007)) {
            $InitializeCommonEvent(54, 90015100, 8007, 9117, 0, 0);
            $InitializeCommonEvent(55, 90015100, 8007, 9119, 0, 0);
        }
        if (EventFlag(8008)) {
            $InitializeCommonEvent(56, 90015100, 8008, 9112, 0, 0);
            $InitializeCommonEvent(57, 90015100, 8008, 9116, 0, 0);
        }
        if (EventFlag(8009)) {
            $InitializeCommonEvent(58, 90015100, 8009, 9113, 0, 0);
            $InitializeCommonEvent(59, 90015100, 8009, 9117, 0, 0);
        }
        if (EventFlag(8010)) {
            $InitializeCommonEvent(60, 90015100, 8010, 9114, 0, 0);
            $InitializeCommonEvent(61, 90015100, 8010, 9118, 0, 0);
        }
        if (EventFlag(8011)) {
            $InitializeCommonEvent(62, 90015100, 8011, 9115, 0, 0);
            $InitializeCommonEvent(63, 90015100, 8011, 9119, 0, 0);
        }
    }
    $InitializeEvent(0, 1400, 7060001, 7060000);
    $InitializeEvent(0, 1402, 7060201, 7060200);
    $InitializeEvent(0, 1403, 7060101, 7060100);
    $InitializeEvent(0, 1406, 7060400, 7060401, 7060402, 8160, 9350);
    $InitializeEvent(1, 1406, 7060600, 7060601, 0, 8165, 9355);
    $InitializeEvent(2, 1406, 7060500, 7060501, 0, 8170, 9360);
    $InitializeEvent(3, 1406, 7060300, 7060301, 0, 8175, 9365);
    $InitializeEvent(0, 1450, 8970001, 8970000);
    $InitializeCommonEvent(0, 90015003, 6999000, 7704, 7724, 8024, 0, 1, 2.5);
    $InitializeCommonEvent(0, 90015003, 8970001, 8075, 0, 8025, 0, 8970000, 2.5);
    $InitializeCommonEvent(0, 90015003, 6999400, 8075, 0, 9056, 0, 5, 2.5);
    $InitializeCommonEvent(0, 90015003, 8970020, 8076, 0, 8025, 0, 8970020, 2.5);
    $InitializeCommonEvent(0, 90015003, 6999400, 8076, 0, 9056, 0, 5, 2.5);
    $InitializeCommonEvent(0, 90015003, 8970050, 8077, 0, 8025, 0, 8970050, 6);
    $InitializeCommonEvent(0, 90015003, 8970010, 8078, 0, 8025, 0, 8970010, 2.5);
    $InitializeCommonEvent(0, 90015003, 8970030, 8079, 0, 8025, 0, 8970030, 2.5);
    $InitializeCommonEvent(0, 90015024, 8970040, 8080, 0, 8025, 0, 95005, 8970040, 2.5);
    $InitializeCommonEvent(0, 90015003, 8970060, 8081, 0, 8025, 0, 8970060, 2.5);
    $InitializeCommonEvent(0, 90015003, 6999200, 7603, 0, 9192, 0, 3, 2.5);
    $InitializeCommonEvent(0, 90015003, 6999300, 7601, 0, 9193, 0, 4, 2.5);
    $InitializeCommonEvent(0, 90015003, 6999610, 7604, 0, 9195, 0, 13, 2.5);
    $InitializeCommonEvent(0, 90015003, 9700, 0, 0, 9206, 0, 100, 0);
    $InitializeCommonEvent(0, 90015003, 9701, 0, 0, 9207, 0, 101, 0);
    $InitializeCommonEvent(0, 90015003, 9713, 0, 0, 9208, 0, 113, 0);
    $InitializeCommonEvent(0, 90015003, 9714, 0, 0, 9200, 0, 114, 0);
    $InitializeCommonEvent(0, 90015003, 9710, 0, 0, 9209, 0, 110, 0);
    $InitializeCommonEvent(0, 90015003, 9711, 0, 0, 9211, 0, 111, 0);
    $InitializeCommonEvent(0, 90015003, 9702, 0, 0, 9212, 0, 102, 0);
    $InitializeCommonEvent(0, 90015003, 9703, 0, 0, 9213, 0, 103, 0);
    $InitializeCommonEvent(0, 90015003, 9716, 0, 0, 9214, 0, 116, 0);
    $InitializeCommonEvent(0, 90015003, 9707, 0, 0, 9216, 0, 107, 0);
    $InitializeCommonEvent(0, 90015003, 9704, 0, 0, 9218, 0, 104, 0);
    $InitializeCommonEvent(0, 90015003, 9706, 0, 0, 9217, 0, 106, 0);
    $InitializeCommonEvent(0, 90015003, 9803, 0, 0, 9280, 0, 153, 0);
    $InitializeCommonEvent(0, 90015003, 9806, 0, 0, 9281, 0, 156, 0);
    $InitializeCommonEvent(0, 90015003, 9801, 0, 0, 9282, 0, 151, 0);
    $InitializeCommonEvent(0, 90015024, 98290, 7604, 0, 1028404010, 0, 1028404011, 500, 2.5);
    $InitializeCommonEvent(0, 90015024, 98290, 7604, 0, 1056404010, 0, 1056404011, 500, 2.5);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015461, 8240, 0.08, 8243, 8270, 8275);
        $InitializeCommonEvent(0, 90015464, 8240, 8241);
    }
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015461, 8250, 0.08, 8253, 8280, 8285);
        $InitializeCommonEvent(0, 90015464, 8250, 8251);
    }
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015461, 8260, 0.08, 8263, 8290, 8295);
        $InitializeCommonEvent(0, 90015464, 8260, 8261);
    }
    $InitializeEvent(0, 1200);
    $InitializeEvent(0, 1201);
    $InitializeEvent(0, 1202);
    $InitializeEvent(0, 1210);
    $InitializeEvent(0, 1211);
    $InitializeEvent(0, 1212);
    $InitializeCommonEvent(0, 90005595, 1042360950, 0);
    $InitializeCommonEvent(0, 90005595, 1042370950, 0);
    $InitializeCommonEvent(0, 90005595, 1042370952, 0);
    $InitializeCommonEvent(0, 90005595, 1042380951, 0);
    $InitializeCommonEvent(0, 90005595, 1042380952, 0);
    $InitializeCommonEvent(0, 90005595, 1042390951, 0);
    $InitializeCommonEvent(0, 90005595, 1043360950, 0);
    $InitializeCommonEvent(0, 90005595, 1043360951, 0);
    $InitializeCommonEvent(0, 90005595, 1043370951, 0);
    $InitializeCommonEvent(0, 90005595, 1043380950, 0);
    $InitializeCommonEvent(0, 90005595, 1043380951, 0);
    $InitializeCommonEvent(0, 90005595, 1043390951, 6011);
    $InitializeCommonEvent(0, 90005595, 1043390953, 0);
    $InitializeCommonEvent(0, 90005595, 1044360950, 0);
    $InitializeCommonEvent(0, 90005595, 1044360955, 0);
    $InitializeCommonEvent(0, 90005595, 1044370955, 0);
    $InitializeCommonEvent(0, 90005595, 1044370950, 0);
    $InitializeCommonEvent(0, 90005595, 1044370953, 0);
    $InitializeCommonEvent(0, 90005595, 1044370955, 0);
    $InitializeCommonEvent(0, 90005595, 1044380950, 0);
    $InitializeCommonEvent(0, 90005595, 1044380953, 0);
    $InitializeCommonEvent(0, 90005595, 1044390951, 6011);
    $InitializeCommonEvent(0, 90005595, 1044390952, 0);
    $InitializeCommonEvent(0, 90005595, 1045360951, 0);
    $InitializeCommonEvent(0, 90005595, 1045370950, 0);
    $InitializeCommonEvent(0, 90005595, 1045370951, 0);
    $InitializeCommonEvent(0, 90005595, 1045370953, 0);
    $InitializeCommonEvent(0, 90005595, 1045370954, 0);
    $InitializeCommonEvent(0, 90005595, 1045370955, 0);
    $InitializeCommonEvent(0, 90005595, 1045380950, 0);
    $InitializeCommonEvent(0, 90005595, 1045390951, 0);
    $InitializeCommonEvent(0, 90005595, 1043370950, 0);
    $InitializeCommonEvent(0, 90005595, 1043360951, 0);
    $InitializeCommonEvent(0, 90005595, 1042370951, 0);
    $InitializeCommonEvent(0, 90005595, 12001950, 0);
    $InitializeCommonEvent(0, 90005595, 1043390960, 0);
    $InitializeEvent(7, 1700, 7, 9307, 0);
    $InitializeEvent(8, 1700, 8, 9308, 0);
    $InitializeEvent(9, 1700, 9, 9309, 0);
    $InitializeEvent(10, 1700, 10, 9310, 0);
    $InitializeEvent(11, 1700, 11, 9311, 0);
    $InitializeEvent(12, 1700, 12, 9312, 0);
    $InitializeEvent(13, 1700, 13, 9313, 0);
    $InitializeEvent(14, 1700, 14, 9314, 0);
    $InitializeEvent(15, 1700, 15, 9315, 0);
    $InitializeEvent(20, 1700, 20, 9320, 0);
    $InitializeEvent(21, 1700, 21, 9321, 0);
    $InitializeEvent(22, 1700, 22, 9322, 0);
    $InitializeEvent(23, 1700, 23, 9323, 0);
    $InitializeEvent(24, 1700, 24, 9324, 0);
    $InitializeCommonEvent(0, 90015202, 9320, 6210, 9193);
    $InitializeCommonEvent(1, 90015202, 9321, 6211, 9194);
    $InitializeCommonEvent(2, 90015202, 9322, 6212, 9192);
    $InitializeCommonEvent(3, 90015202, 9323, 6213, 9191);
    $InitializeCommonEvent(0, 90015203, 9324, 9193);
    $InitializeCommonEvent(1, 90015203, 9324, 9194);
    $InitializeCommonEvent(2, 90015203, 9324, 9192);
    $InitializeCommonEvent(3, 90015203, 9324, 9191);
    $InitializeEvent(26, 1700, 26, 9326, 0);
    $InitializeCommonEvent(0, 90015204, 6200, Hero.Wylder);
    $InitializeCommonEvent(1, 90015204, 6201, Hero.Guardian);
    $InitializeCommonEvent(2, 90015204, 6202, Hero.Ironeye);
    $InitializeCommonEvent(3, 90015204, 6203, Hero.Duchess);
    $InitializeCommonEvent(4, 90015204, 6204, Hero.Raider);
    $InitializeCommonEvent(5, 90015204, 6205, Hero.Revenant);
    $InitializeCommonEvent(6, 90015204, 6206, Hero.Recluse);
    $InitializeCommonEvent(7, 90015204, 6207, Hero.Executor);
    $InitializeCommonEvent(0, 90015205, 9326, 6200, Hero.Wylder);
    $InitializeCommonEvent(1, 90015205, 9326, 6201, Hero.Guardian);
    $InitializeCommonEvent(2, 90015205, 9326, 6202, Hero.Ironeye);
    $InitializeCommonEvent(3, 90015205, 9326, 6203, Hero.Duchess);
    $InitializeCommonEvent(4, 90015205, 9326, 6204, Hero.Raider);
    $InitializeCommonEvent(5, 90015205, 9326, 6205, Hero.Revenant);
    $InitializeCommonEvent(6, 90015205, 9326, 6206, Hero.Recluse);
    $InitializeCommonEvent(7, 90015205, 9326, 6207, Hero.Executor);
    $InitializeEvent(27, 1700, 27, 9327, 0);
    $InitializeCommonEvent(0, 90015206, 9327);
    $InitializeEvent(28, 1700, 28, 9328, 0);
    $InitializeCommonEvent(0, 90015207, 9328, 9040, 9041);
    $InitializeEvent(29, 1700, 29, 9329, 0);
    $InitializeCommonEvent(0, 90015209, 9329);
    $InitializeEvent(30, 1700, 30, 9330, 0);
    $InitializeCommonEvent(0, 90015211, 9330, 46800800);
    $InitializeEvent(32, 1700, 32, 9332, 0);
    $InitializeCommonEvent(0, 90015212, 9332, 8075, 8025);
    $InitializeEvent(33, 1700, 33, 9333, 0);
    $InitializeCommonEvent(1, 90015212, 9333, 8078, 8025);
    $InitializeEvent(34, 1700, 34, 9334, 0);
    $InitializeCommonEvent(2, 90015212, 9334, 8076, 8025);
    $InitializeEvent(35, 1700, 35, 9335, 0);
    $InitializeCommonEvent(3, 90015212, 9335, 8079, 8025);
    $InitializeEvent(0, 1680, 0, 100, 0);
    $InitializeEvent(1, 1680, 1, 101, 0);
    $InitializeEvent(2, 1680, 2, 110, 0);
    $InitializeEvent(3, 1680, 3, 115, 0);
    $InitializeEvent(0, 1690, 0, 120, 0);
    $InitializeEvent(1, 1690, 1, 110, 0);
    $InitializeEvent(2, 1690, 2, 115, 0);
    $InitializeEvent(3, 1690, 3, 951, 0);
});

$Event(50, Default, function() {
    $InitializeEvent(0, 1180);
    $InitializeEvent(0, 1181);
    if (!HasMultiplayerState(MultiplayerState.Singleplayer)) {
        if (IsPlayerNo(1)) {
            $InitializeEvent(0, 1182, 7005);
            $InitializeEvent(0, 1183, 7010, 7005);
        }
        if (IsPlayerNo(2)) {
            $InitializeEvent(0, 1182, 7006);
            $InitializeEvent(0, 1183, 7011, 7006);
        }
        if (IsPlayerNo(3)) {
            $InitializeEvent(0, 1182, 7007);
            $InitializeEvent(0, 1183, 7012, 7007);
        }
        $InitializeEvent(0, 1184, 10002, 7005, 7010);
        $InitializeEvent(1, 1184, 10003, 7006, 7011);
        $InitializeEvent(2, 1184, 10004, 7007, 7012);
    }
    $InitializeEvent(0, 1188);
    $InitializeEvent(0, 1900);
    $InitializeEvent(0, 1901);
    $InitializeEvent(0, 1902);
    $InitializeEvent(0, 1903);
    SetEventFlagID(6000, OFF);
    SetEventFlagID(6001, ON);
    $InitializeEvent(0, 1904);
    $InitializeEvent(0, 1905);
    $InitializeEvent(0, 1906, 550, Weather.Type01);
    $InitializeEvent(1, 1906, 551, Weather.Type00);
    $InitializeEvent(2, 1906, 552, Weather.Type10);
    $InitializeEvent(3, 1906, 553, Weather.Type11);
    $InitializeEvent(4, 1906, 554, Weather.Type20);
    $InitializeEvent(5, 1906, 555, Weather.Type21);
    $InitializeEvent(6, 1906, 556, Weather.Type30);
    $InitializeEvent(7, 1906, 557, Weather.Type31);
    $InitializeEvent(8, 1906, 558, Weather.Type40);
    $InitializeEvent(9, 1906, 559, Weather.Type41);
    $InitializeEvent(10, 1906, 560, Weather.Type50);
    $InitializeEvent(11, 1906, 561, Weather.Type51);
    $InitializeEvent(12, 1906, 562, Weather.Type52);
    $InitializeEvent(13, 1906, 563, Weather.Type60);
    $InitializeEvent(0, 1907);
    $InitializeEvent(0, 1908);
    EndEvent();
});

$Event(1100, Default, function() {
    WaitFor(IsGameMode(2) || EventFlag(69991));
    if (!EventFlag(7500)) {
        SetNetworkconnectedEventFlagID(7500, ON);
    }
    if (!EventFlag(7502)) {
        WaitFor(EventFlag(7502) && PlayerIsInOwnWorld());
        if (!EventFlag(7700)) {
            if (PlayerIsInOwnWorld()) {
                SetNetworkconnectedEventFlagID(7503, ON);
            }
        }
    }
    if (EventFlag(7700)) {
        if (!EventFlag(8020)) {
            WaitFor(EventFlag(8020) && PlayerIsInOwnWorld());
            if (PlayerIsInOwnWorld()) {
                SetNetworkconnectedEventFlagID(7503, ON);
            }
        }
    }
    if (!EventFlag(7505)) {
        WaitFor(PlayAreaCurrentTimeInRange(0, 0, 0, 22, 59, 59) && PlayerIsInOwnWorld());
        if (PlayerIsInOwnWorld()) {
            SetNetworkconnectedEventFlagID(7505, ON);
        }
    }
    if (!EventFlag(7507)) {
        WaitFor(EventFlag(7507) && PlayerIsInOwnWorld());
        if (!EventFlag(7720)) {
            if (PlayerIsInOwnWorld()) {
                SetNetworkconnectedEventFlagID(7508, ON);
            }
        }
    }
    if (EventFlag(7720)) {
        if (!EventFlag(8020)) {
            WaitFor(EventFlag(8020) && PlayerIsInOwnWorld());
            if (PlayerIsInOwnWorld()) {
                SetNetworkconnectedEventFlagID(7508, ON);
            }
        }
    }
    WaitFor(EventFlag(7000));
    EndEvent();
});

$Event(1101, Default, function() {
    EndIf(EventFlag(7500));
    WaitFor(EventFlag(7500));
    if (HasMultiplayerState(MultiplayerState.Singleplayer)) {
        SetSpEffect(20000, 6999500);
    }
    SetNetworkconnectedEventFlagID(82100, ON);
    WaitFor(ElapsedSeconds(2));
    EndEvent();
});

$Event(1102, Default, function() {
    EndIf(EventFlag(7501));
    WaitFor(EventFlag(7501));
    EndEvent();
});

$Event(1103, Default, function() {
    EndIf(EventFlag(7505));
    if (!EventFlag(7520)) {
        WaitFor(EventFlag(7503));
        WaitFor(ElapsedSeconds(20));
        SetNetworkconnectedEventFlagID(7520, ON);
    }
L0:
    if (!EventFlag(7604)) {
        PlaySE(20000, SoundType.EnvironmentalSound, 600010100);
    }
    if (EventFlag(7604)) {
        PlaySE(20000, SoundType.EnvironmentalSound, 600010101);
    }
    WaitFixedTimeSeconds(2);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, -1, 807070);
    WaitFor(ElapsedSeconds(2));
    ResetTimeOfDay(7, 0, 0, 4);
    EndEvent();
});

$Event(1104, Default, function() {
    EndIf(EventFlag(7505));
    WaitFor(EventFlag(7505));
    WaitFor(ElapsedSeconds(5));
    if (HasMultiplayerState(MultiplayerState.Singleplayer)) {
        SetSpEffect(20000, 6999500);
    }
    if (!EventFlag(7811)) {
        RecordUserDispLog(11281, 20000, LogObjectType.None, -1);
        SetNetworkconnectedEventFlagID(7517, ON);
    }
    EndEvent();
});

$Event(1105, Default, function() {
    EndIf(EventFlag(7506));
    WaitFor(EventFlag(7506));
    EndEvent();
});

$Event(1106, Default, function() {
    EndIf(EventFlag(7508));
    WaitFor(EventFlag(7508));
    EndEvent();
});

$Event(1107, Default, function() {
    WaitFor(EventFlag(7500));
    if (!EventFlag(7515)) {
        WaitFor(PlayAreaCurrentTimeInRange(23, 59, 0, 23, 59, 59) && PlayerIsInOwnWorld());
        if (PlayerIsInOwnWorld()) {
            SetNetworkconnectedEventFlagID(7515, ON);
        }
    }
    RestartIf(!EventFlag(7515));
    WaitFor(
        PlayerIsInOwnWorld()
            && (PlayAreaCurrentTimeInRange(0, 0, 0, 23, 58, 59)
                || ((!EventFlag(7505)
                    && ((!EventFlag(7700) && EventFlag(7502)) || (EventFlag(7700) && EventFlag(8020))))
                    || (EventFlag(7505)
                        && ((!EventFlag(7720) && EventFlag(7507))
                            || (EventFlag(7720) && EventFlag(8020)))))));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(7515, OFF);
    }
    WaitFor(PlayAreaCurrentTimeInRange(0, 0, 0, 23, 58, 59) && PlayerIsInOwnWorld());
    RestartEvent();
});

$Event(1108, Default, function(eventFlagId) {
    DisableNetworkSync();
    WaitFor(EventFlag(7500));
    GotoIf(L0, !EventFlag(eventFlagId));
    GotoIf(L1, EventFlag(eventFlagId));
L0:
    WaitFor(
        (!EventFlag(9052)
            && PlayAreaCurrentTimeInRange(23, 59, 0, 23, 59, 59)
            && !(!EventFlag(7505) && EventFlag(7502)))
            || EventFlag(eventFlagId));
    SetEventFlagID(eventFlagId, ON);
    RestartEvent();
L1:
    WaitFor(
        EventFlag(9052)
            || PlayAreaCurrentTimeInRange(0, 0, 0, 23, 58, 59)
            || (!EventFlag(7505) && EventFlag(7502))
            || !EventFlag(eventFlagId));
    SetEventFlagID(eventFlagId, OFF);
    RestartEvent();
});

$Event(1111, Default, function() {
    DisableNetworkSync();
    if (EventFlag(9011)) {
        SetEventFlagID(9012, OFF);
        EndEvent();
    }
    if (IsGameMode(2)) {
        SetEventFlagID(9012, ON);
        SetSpEffect(10000, 99202);
    }
    WaitFor(EventFlag(7500));
    if ((CharacterHasSpEffect(10002, 702000)
        || CharacterHasSpEffect(10003, 702000)
        || CharacterHasSpEffect(10004, 702000))
        && !IsHero(Hero.Ironeye)) {
        SetSpEffect(10000, 702001);
    }
    SetEventFlagID(9012, ON);
    WaitFor(ElapsedFrames(1));
    if (EventFlag(7812)) {
        RecordUserDispLog(11350, 0, LogObjectType.None, -1);
    }
    if (EventFlag(7811)) {
        RecordUserDispLog(11360, 0, LogObjectType.None, -1);
        RecordUserDispLog(13000, 0, LogObjectType.None, -1);
    }
    SetEventFlagID(9011, ON);
    WaitFor(CharacterHasSpEffect(20000, 99210) || ElapsedSeconds(1));
    WaitFor(!CharacterHasSpEffect(20000, 99210) && !CharacterHasSpEffect(20000, 102610));
    SetEventFlagID(9012, OFF);
});

$Event(1113, Default, function() {
    DisableNetworkSync();
    EndIf(EventFlag(7505));
    WaitFor(EventFlag(7503));
    if (CharacterHasSpEffect(20000, 46285)) {
        SetSpEffect(20000, 46286);
    }
    if (CharacterHasSpEffect(20000, 99685)) {
        SetSpEffect(20000, 99686);
    }
});

$Event(1116, Default, function() {
    DisableNetworkSync();
    EndIf(EventFlag(7508));
    WaitFor(EventFlag(7508));
    if (CharacterHasSpEffect(20000, 46285)) {
        SetSpEffect(20000, 46286);
    }
    if (CharacterHasSpEffect(20000, 99685)) {
        SetSpEffect(20000, 99686);
    }
});

$Event(1120, Default, function() {
    EndIf(!EventFlag(7700) && !EventFlag(7720));
    EndIf(EventFlag(8035));
    if (EventFlag(7700)) {
        WaitFor(EventFlag(7502));
    }
    if (EventFlag(7720)) {
        WaitFor(EventFlag(7507));
    }
    WaitFor(ElapsedSeconds(15));
    WaitFor(PlayerIsInOwnWorld());
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(8035, ON);
    }
});

$Event(1121, Default, function() {
    EndIf(!EventFlag(7701) && !EventFlag(7721));
    EndIf(EventFlag(8042));
    if (EventFlag(7701)) {
        WaitFor(EventFlag(7500));
    }
    if (EventFlag(7721)) {
        WaitFor(EventFlag(7505));
    }
    WaitFor((EventFlag(9013) || EventFlag(8040)) && PlayerIsInOwnWorld());
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(8040, ON);
    }
    WaitFor(ElapsedSeconds(5));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(8041, ON);
    }
    EndEvent();
});

$Event(1122, Default, function() {
    EndIf(!EventFlag(7702) && !EventFlag(7722));
    EndIf(EventFlag(8047));
    WaitFor(PlayerIsInOwnWorld());
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(8045, ON);
    }
    WaitFor(ElapsedFrames(1));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(8046, ON);
    }
    EndEvent();
});

$Event(1124, Default, function() {
    EndIf(!EventFlag(7704) && !EventFlag(7724));
    EndIf(EventFlag(8055));
    if (EventFlag(7704)) {
        WaitFor(EventFlag(7500));
    }
    if (EventFlag(7724)) {
        WaitFor(EventFlag(7505));
    }
    WaitFor((EventFlag(9013) || EventFlag(8055)) && PlayerIsInOwnWorld());
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(8055, ON);
    }
    EndEvent();
});

$Event(1125, Default, function() {
    EndIf(!EventFlag(7705) && !EventFlag(7725));
    EndIf(EventFlag(8060));
    WaitFor((EventFlag(9013) || EventFlag(8060)) && PlayerIsInOwnWorld());
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(8060, ON);
    }
    EndEvent();
});

$Event(1127, Default, function(eventFlagId, eventFlagId2) {
    EndIf(!EventFlag(7707) && !EventFlag(7727));
    EndIf(!EventFlag(eventFlagId));
    if (EventFlag(8027)) {
        SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
        EndEvent();
    }
    WaitFor(EventFlag(8071));
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    WaitFor(EventFlag(8072) || EventFlag(8073));
    SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
    EndIf(EventFlag(8072));
    WaitFor(!EventFlag(8073));
    RestartEvent();
});

$Event(1129, Default, function() {
    DisableNetworkSync();
    EndIf(!AnyBatchEventFlags(7700, 7739));
    EndIf(EventFlag(9013));
    if (AnyBatchEventFlags(7700, 7719)) {
        WaitFor(EventFlag(7500));
        Goto(L0);
    }
    if (AnyBatchEventFlags(7720, 7739)) {
        WaitFor(EventFlag(7505));
        Goto(L1);
    }
L0:
    if (EventFlag(8077) || EventFlag(8080) || EventFlag(8081)) {
        WaitFor(PlayAreaCurrentTimeInRange(13, 4, 30, 23, 59, 59));
    } else {
        WaitFor(
            RandomElapsedSeconds(360, 480) || PlayAreaCurrentTimeInRange(16, 43, 12, 23, 59, 59));
        Goto(L2);
L1:
        if (EventFlag(7725) && EventFlag(8077) && EventFlag(7604)) {
            WaitFor(
                RandomElapsedSeconds(60, 120) || PlayAreaCurrentTimeInRange(9, 25, 48, 23, 59, 59));
        } else {
            if (EventFlag(7725) && EventFlag(8077)) {
                WaitFor(ElapsedSeconds(2));
                if (EventFlag(8211)) {
                    WaitFor(
                        ElapsedSeconds(118) || PlayAreaCurrentTimeInRange(9, 25, 48, 23, 59, 59));
                    Goto(L2);
                }
            }
            if (EventFlag(7725) && !EventFlag(7600)) {
                WaitFor(
                    RandomElapsedSeconds(120, 180)
                        || PlayAreaCurrentTimeInRange(10, 38, 42, 23, 59, 59));
            } else if (EventFlag(8077) || EventFlag(8080) || EventFlag(8081)) {
                WaitFor(
                    RandomElapsedSeconds(120, 360)
                        || PlayAreaCurrentTimeInRange(14, 17, 24, 23, 59, 59));
            } else {
                WaitFor(
                    RandomElapsedSeconds(120, 480)
                        || PlayAreaCurrentTimeInRange(16, 43, 12, 23, 59, 59));
                Goto(L2);
            }
        }
    }
L2:
    SetEventFlagID(9013, ON);
});

$Event(1130, Default, function() {
    EndIf(!EventFlag(8076));
    WaitFor(EventFlag(8090));
    timeFlag |= ElapsedSeconds(180);
    if (EventFlag(9998)) {
        timeFlag |= EventFlag(8912);
    } else {
        timeFlag |= EventFlag(8062);
    }
    WaitFor(timeFlag);
    GotoIf(S0, !EventFlag(9998));
    GotoIf(S2, EventFlag(8912));
    Goto(S1);
S0:
    GotoIf(S2, EventFlag(8062));
S1:
    SetNetworkconnectedEventFlagID(8091, ON);
S2:
    NoOp();
});

$Event(1131, Default, function() {
    EndIf(!EventFlag(8078));
    EndIf(EventFlag(8061));
    WaitFor(EventFlag(8060));
    WaitFor(ElapsedSeconds(5));
    EndIf(EventFlag(8061));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(8100, ON);
    }
    WaitFor(ElapsedSeconds(5));
    EndIf(EventFlag(8061));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(8101, ON);
    }
    EndEvent();
});

$Event(1132, Default, function() {
    EndIf(!EventFlag(8076));
    EndIf(EventFlag(8061));
    WaitFor(EventFlag(8060));
    WaitFor(ElapsedSeconds(5));
    EndIf(EventFlag(8061));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(8092, ON);
    }
    WaitFor(ElapsedSeconds(5));
    EndIf(EventFlag(8061));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(8093, ON);
    }
    WaitFor(ElapsedSeconds(5));
    EndIf(EventFlag(8061));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(8094, ON);
    }
    EndEvent();
});

$Event(1133, Default, function() {
    EndIf(!EventFlag(8075));
    EndIf(EventFlag(8061));
    WaitFor(EventFlag(8060));
    WaitFor(ElapsedSeconds(5));
    EndIf(EventFlag(8061));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(8088, ON);
    }
    WaitFor(ElapsedSeconds(5));
    EndIf(EventFlag(8061));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(8089, ON);
    }
    EndEvent();
});

$Event(1134, Default, function() {
    EndIf(!EventFlag(8079));
    EndIf(EventFlag(8061));
    WaitFor(EventFlag(8060));
    WaitFor(ElapsedSeconds(5));
    EndIf(EventFlag(8061));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(8108, ON);
    }
    WaitFor(ElapsedSeconds(5));
    EndIf(EventFlag(8061));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(8109, ON);
    }
    EndEvent();
});

$Event(1135, Default, function() {
    EndIf(!EventFlag(7705) && !EventFlag(7725));
    EndIf(EventFlag(8080));
    EndIf(EventFlag(8077));
    if (EventFlag(8062)) {
        SetEventFlagID(9024, OFF);
        EndEvent();
    }
    if (EventFlag(8061)) {
        SetEventFlagID(9024, ON);
        GotoIf(S0, !EventFlag(8081));
        ActivateGparamOverride(13, 3);
        SetSpEffect(20000, 63100);
        Goto(L0);
S0:
        if (!EventFlag(7604)) {
            ActivateGparamOverride(2, 3);
        }
        if (EventFlag(7604)) {
            ActivateGparamOverride(34, 3);
        }
        SetSpEffect(20000, 99160);
    } else {
        WaitFor(EventFlag(8061));
        SetEventFlagID(9024, ON);
        PlaySE(20000, SoundType.EnvironmentalSound, 600080000);
        if (EventFlag(8081)) {
            ActivateGparamOverride(13, 3);
            SetSpEffect(20000, 63100);
        } else {
            if (!EventFlag(7604)) {
                ActivateGparamOverride(2, 3);
            }
            if (EventFlag(7604)) {
                ActivateGparamOverride(34, 3);
            }
            SetSpEffect(20000, 99160);
        }
    }
L0:
    WaitFor(EventFlag(8062));
    PlaySE(20000, SoundType.EnvironmentalSound, 600080010);
    DeactivateGparamOverride(2);
    if (EventFlag(8081)) {
        SetSpEffect(20000, 63102);
    } else {
        SetSpEffect(20000, 99161);
    }
    WaitFixedTimeFrames(1);
    SetEventFlagID(9024, OFF);
});

$Event(1136, Default, function() {
    EndIf(!EventFlag(7705) && !EventFlag(7725));
    EndIf(EventFlag(8062));
    EndIf(EventFlag(8061) && PlayAreaCurrentTimeInRange(20, 24, 0, 23, 59, 0));
    WaitFor(EventFlag(8061));
    if (EventFlag(8081)) {
        UnknownSound201013(3);
    } else {
        UnknownSound201013(2);
    }
    WaitFor(PlayAreaCurrentTimeInRange(20, 24, 0, 23, 59, 0) || EventFlag(8062));
    UnknownSound201013(0);
});

$Event(1137, Default, function() {
    DisableNetworkSync();
    EndIf(!EventFlag(8077));
    if (EventFlag(8062)) {
        SetEventFlagID(9024, OFF);
        EndEvent();
    }
    WaitFor(EventFlag(8061));
    SetEventFlagID(9024, ON);
    if (!EventFlag(7604)) {
        ActivateGparamOverride(9, 3);
    }
    if (EventFlag(7604)) {
        ActivateGparamOverride(35, 3);
    }
    WaitFor(EventFlag(8062));
    DeactivateGparamOverride(2);
    WaitFixedTimeFrames(1);
    SetEventFlagID(9024, OFF);
});

$Event(1138, Default, function() {
    DisableNetworkSync();
    EndIf(!EventFlag(8077));
    EndIf(EventFlag(8061));
    WaitFor(
        ((EventFlag(7705) && EventFlag(7500)) || (EventFlag(7725) && EventFlag(7505)))
            && PlayerIsInOwnWorld());
    EndIf(EventFlag(8214));
    SetNetworkconnectedEventFlagID(8210, ON);
    WaitFor(ElapsedSeconds(1));
    EndIf(EventFlag(8214));
    EndIf(EventFlag(7705));
    SetNetworkconnectedEventFlagID(8211, ON);
});

$Event(1139, Default, function() {
    DisableNetworkSync();
    EndIf(EventFlag(8061));
    EndIf(EventFlag(8043));
    EndIf(EventFlag(8035));
    EndIf(EventFlag(8057));
    EndIf(EventFlag(8071));
    if (EventFlag(7705) || EventFlag(7725)) {
        WaitFor(EventFlag(8061));
        if (EventFlag(8075)) {
            DisplayTextEffectId(6010);
        }
        if (EventFlag(8076)) {
            DisplayTextEffectId(6020);
        }
        if (EventFlag(8078)) {
            DisplayTextEffectId(6040);
            WaitFixedTimeSeconds(3);
            RecordUserDispLog(11144, 20000, LogObjectType.None, -1);
        }
        if (EventFlag(8079)) {
            DisplayTextEffectId(6030);
        }
        if (EventFlag(8077)) {
            DisplayTextEffectId(6090);
        }
        if (EventFlag(8080)) {
            DisplayTextEffectId(7010);
        }
        if (EventFlag(8081)) {
            DisplayTextEffectId(7000);
        }
        EndEvent();
    }
L0:
    if (EventFlag(7701) || EventFlag(7721)) {
        WaitFor(EventFlag(8043));
        DisplayTextEffectId(6060);
        EndEvent();
    }
L1:
    if (EventFlag(7700) || EventFlag(7720)) {
        WaitFor(EventFlag(8035));
        WaitFixedTimeSeconds(7);
        DisplayTextEffectId(6050);
        RecordUserDispLog(11150, 20000, LogObjectType.None, -1);
        EndEvent();
    }
L2:
    if (EventFlag(7704) || EventFlag(7724)) {
        WaitFor(EventFlag(8057));
        if (!EventFlag(8058)) {
            DisplayTextEffectId(6070);
        }
        if (EventFlag(8058)) {
            DisplayTextEffectId(6071);
        }
        EndEvent();
    }
L3:
    if (EventFlag(7707) || EventFlag(7727)) {
        WaitFor(EventFlag(8071));
        DisplayTextEffectId(6080);
        EndEvent();
    }
L4:
    NoOp();
});

$Event(1140, Restart, function() {
    if (!EventFlag(7700)) {
        SetNetworkconnectedEventFlagID(7518, OFF);
        EndEvent();
    }
    if (EventFlag(8020)) {
        SetNetworkconnectedEventFlagID(7518, OFF);
        EndEvent();
    }
    WaitFor(EventFlag(7501) || EventFlag(8020));
    if (EventFlag(8020)) {
        SetNetworkconnectedEventFlagID(7518, OFF);
        EndEvent();
    }
    SetNetworkconnectedEventFlagID(7518, ON);
    WaitFor(EventFlag(8020));
    SetNetworkconnectedEventFlagID(7518, OFF);
});

$Event(1141, Default, function() {
    EndIf(!EventFlag(8077));
    EndIf(EventFlag(8061));
    WaitFor(EventFlag(8214) && EventFlag(8060));
    SetNetworkconnectedEventFlagID(8061, ON);
    PlaySE(20000, SoundType.EnvironmentalSound, 600081000);
});

$Event(1142, Default, function() {
    EndIf(!EventFlag(8077));
    EndIf(EventFlag(8062));
    WaitFor(EventFlag(8061));
    flag = EventFlag(8062) || AllBatchEventFlags(8215, 8217);
    WaitFor(flag || PlayAreaCurrentTimeInRange(23, 0, 0, 23, 59, 59));
    if (!flag.Passed) {
        WaitFixedTimeFrames(1);
    }
    if (!EventFlag(8062)) {
        SetNetworkconnectedEventFlagID(8025, ON);
        SetNetworkconnectedEventFlagID(8062, ON);
        RecordUserDispLog(110001, 0, LogObjectType.None, -1);
        WaitFor(ElapsedSeconds(3.2));
        DisplayTextEffectId(2200);
        EndEvent();
    }
L0:
    RecordUserDispLog(110002, 0, LogObjectType.None, -1);
});

$Event(1143, Default, function() {
    EndIf(!EventFlag(8080));
    EndIf(EventFlag(8061));
    WaitFor(EventFlag(8060));
    WaitFor(ElapsedSeconds(5));
    EndIf(EventFlag(8061));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(80000, ON);
    }
    WaitFor(ElapsedSeconds(5));
    EndIf(EventFlag(8061));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(80001, ON);
    }
    EndEvent();
});

$Event(1144, Default, function() {
    EndIf(!EventFlag(8081));
    EndIf(EventFlag(8061));
    WaitFor(EventFlag(8060));
    WaitFor(ElapsedSeconds(15));
    EndIf(EventFlag(8061));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(80010, ON);
    }
    WaitFor(ElapsedSeconds(15));
    EndIf(EventFlag(8061));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(80011, ON);
    }
    EndEvent();
});

$Event(1145, Default, function() {
    DisableNetworkSync();
    EndIf(!EventFlag(8081));
    EndIf(EventFlag(95000));
    WaitFor(EventFlag(8060));
    if (!IsPlayerCount(1)) {
        WaitFor(AllBatchEventFlags(80012, 80014));
    }
    if (!IsPlayerCount(2)) {
        if (!IsPlayerCount(3)) {
            WaitFor(AllBatchEventFlags(80012, 80013));
        }
    }
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(8061, ON);
    }
    WaitFor(ElapsedSeconds(3));
    RemoveEstusCharge();
    RemoveEstusCharge();
    if (!IsPlayerCount(1)) {
        RemoveEstusCharge();
    }
    if (!IsPlayerCount(1)) {
        if (!AllBatchEventFlags(80018, 80020)) {
            RecordUserDispLog(110051, 10000, LogObjectType.None, -1);
            if (!EventFlag(8062)) {
                SetSpEffect(20000, 448);
            }
        }
    }
    if (!IsPlayerCount(2)) {
        if (!IsPlayerCount(3)) {
            if (!AllBatchEventFlags(80018, 80019)) {
                RecordUserDispLog(110051, 10000, LogObjectType.None, -1);
                if (!EventFlag(8062)) {
                    SetSpEffect(20000, 448);
                }
            }
        }
    }
    SetEventFlagID(95000, ON);
    SaveRequest();
});

$Event(1146, Default, function(eventFlagId, eventFlagId2, eventFlagId3) {
    DisableNetworkSync();
    EndIf(!EventFlag(8081));
    if (EventFlag(eventFlagId2) && !EventFlag(eventFlagId3)) {
        AddEstusCharge();
        SetEventFlagID(eventFlagId3, ON);
        SetEventFlagID(9040, ON);
        SaveRequest();
        EndEvent();
    }
    WaitFor(EventFlag(8061));
    WaitFor(EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId));
    if (EventFlag(eventFlagId2) && !EventFlag(eventFlagId3)) {
        AddEstusCharge();
        RefillEstus();
        SetEventFlagID(eventFlagId3, ON);
        SetEventFlagID(9040, ON);
        SaveRequest();
    }
});

$Event(1148, Default, function() {
    EndIf(!EventFlag(8081));
    EndIf(EventFlag(8062));
    WaitFor(EventFlag(8061));
    flag &= (EventFlag(80015) || EventFlag(80018)) && (EventFlag(80016) || EventFlag(80019));
    if (!IsPlayerCount(1)) {
        flag &= EventFlag(80017) || EventFlag(80020);
    }
    WaitFor(flag);
    if (!IsPlayerCount(2)) {
        if (!IsPlayerCount(3)) {
            if (!AllBatchEventFlags(80018, 80019)) {
                SetNetworkconnectedEventFlagID(8062, ON);
                if (CountEventFlags(TargetEventFlagType.EventFlag, 80015, 80016) >= 2) {
                    RecordUserDispLog(110055, 10000, LogObjectType.None, -1);
                } else {
                    RecordUserDispLog(110054, 10000, LogObjectType.None, -1);
                }
                EndEvent();
            }
        }
    }
L0:
    if (!IsPlayerCount(1)) {
        if (!AllBatchEventFlags(80018, 80020)) {
            SetNetworkconnectedEventFlagID(8062, ON);
            if (CountEventFlags(TargetEventFlagType.EventFlag, 80015, 80017) >= 2) {
                RecordUserDispLog(110055, 10000, LogObjectType.None, -1);
            } else {
                RecordUserDispLog(110054, 10000, LogObjectType.None, -1);
            }
            EndEvent();
        }
    }
L1:
    SetNetworkconnectedEventFlagID(8062, ON);
    SetNetworkconnectedEventFlagID(8025, ON);
    DisplayTextEffectId(2200);
    RecordUserDispLog(110053, 10000, LogObjectType.None, -1);
});

$Event(1149, Default, function(targetTimeSeconds, targetTimeSeconds2) {
    EndIf(!EventFlag(8077));
    EndIf(EventFlag(8062));
    GotoIf(L2, !EventFlag(8222));
    GotoIf(L0, EventFlag(8221));
    GotoIf(L1, !EventFlag(8221));
L2:
    WaitFor(EventFlag(8223) && !EventFlag(8229));
    SetNetworkconnectedEventFlagID(8222, ON);
    SetNetworkconnectedEventFlagID(8221, ON);
L0:
    WaitFor(ElapsedSeconds(targetTimeSeconds2) || !EventFlag(8221) || EventFlag(8229));
    SetNetworkconnectedEventFlagID(8221, OFF);
L1:
    WaitFor((ElapsedSeconds(targetTimeSeconds) || EventFlag(8221)) && !EventFlag(8229));
    SetNetworkconnectedEventFlagID(8221, ON);
    RestartEvent();
});

$Event(1150, Default, function() {
    EndIf(!EventFlag(7602));
    EndIf(AnyBatchEventFlags(8192, 8194));
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlagAndRandomCondition(7602, 0.15)) {
        SetNetworkconnectedEventFlagID(8192, ON);
        EndEvent();
    }
L0:
    if (EventFlagAndRandomCondition(7602, 0.706)) {
        SetNetworkconnectedEventFlagID(8193, ON);
        EndEvent();
    }
L1:
    SetNetworkconnectedEventFlagID(8194, ON);
});

$Event(1151, Default, function() {
    EndIf(!EventFlag(7602));
    EndIf(EventFlag(8190));
    WaitFor(AnyBatchEventFlags(8192, 8194));
    if (EventFlag(8192)) {
        WaitFor(
            (!EventFlag(7505) && PlayAreaCurrentTimeInRange(16, 0, 0, 0, 0, 0)) || EventFlag(7505));
    } else {
L0:
        if (EventFlag(8193)) {
            WaitFor(EventFlag(7505) && PlayAreaCurrentTimeInRange(11, 0, 0, 0, 0, 0));
        } else {
L1:
            if (EventFlag(8194)) {
                WaitFor(EventFlag(7505) && PlayAreaCurrentTimeInRange(16, 0, 0, 0, 0, 0));
            } else {
L2:
                NoOp();
            }
        }
    }
L3:
    SetNetworkconnectedEventFlagID(8190, ON);
});

$Event(1152, Default, function() {
    EndIf(!EventFlag(8077));
    EndIf(EventFlag(8223));
    EndIf(EventFlag(8062));
    if (!EventFlag(8061)) {
        WaitFor(EventFlag(8061));
        RecordUserDispLog(110000, 20000, LogObjectType.None, -1);
    }
L0:
    WaitFor(EventFlag(8215) || EventFlag(8216) || EventFlag(8217));
    RecordUserDispLog(110003, 20000, LogObjectType.None, -1);
    WaitFor(ElapsedSeconds(4) || EventFlag(8062));
    SetNetworkconnectedEventFlagID(8223, ON);
    PlaySE(20000, SoundType.CharacterMotion, 750026001);
    WaitFor(ElapsedSeconds(3));
    EndIf(EventFlag(8062));
    RecordUserDispLog(110006, 20000, LogObjectType.None, -1);
});

$Event(1154, Default, function(spEffectId, spEffectId2, spEffectId3, spEffectId4, spEffectId5) {
    DisableNetworkSync();
    EndIf(!EventFlag(8077));
    if (!EventFlag(8062)) {
        if (!EventFlag(8224)) {
            WaitFor(EventFlag(8061));
            WaitFor(ElapsedSeconds(2));
            if (!EventFlag(203)) {
                SetSpEffect(20000, spEffectId);
            }
            if (EventFlag(203)) {
                SetSpEffect(20000, spEffectId3);
            }
            WaitFor(EventFlag(8224) || EventFlag(8062));
            GotoIf(L0, EventFlag(8062));
            WaitFor(ElapsedSeconds(2));
        }
L1:
        if (!EventFlag(203)) {
            SetSpEffect(20000, spEffectId2);
        }
        if (EventFlag(203)) {
            SetSpEffect(20000, spEffectId4);
        }
        WaitFor(EventFlag(8062));
    }
L0:
    SetSpEffect(20000, spEffectId5);
});

$Event(1155, Default, function() {
    EndIf(!EventFlag(8077));
    EndIf(EventFlag(8062));
    EndIf(EventFlag(8224));
    WaitFor(
        (EventFlag(8215) && EventFlag(8216))
            || (EventFlag(8216) && EventFlag(8217))
            || (EventFlag(8215) && EventFlag(8217)));
    RecordUserDispLog(110005, 20000, LogObjectType.None, -1);
    WaitFor(ElapsedSeconds(4) || EventFlag(8062));
    SetNetworkconnectedEventFlagID(8224, ON);
    SetNetworkconnectedEventFlagID(8229, ON);
    PlaySE(20000, SoundType.CharacterMotion, 750026001);
    WaitFor(ElapsedSeconds(4));
    EndIf(EventFlag(8062));
    RecordUserDispLog(110006, 20000, LogObjectType.None, -1);
    WaitFor(ElapsedSeconds(11));
    SetNetworkconnectedEventFlagID(8229, OFF);
});

$Event(1160, Default, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(20000, 99200) && !CharacterHasSpEffect(20000, 99230));
    ShowFloatingMessage(100, 20000);
    WaitFor(!CharacterHasSpEffect(20000, 99200) || CharacterHasSpEffect(20000, 99230));
    HideFloatingMessage(100, 20000);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1161, Default, function() {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(20000, 102610) && !CharacterHasSpEffect(20000, 99230));
    WaitFixedTimeSeconds(2);
    ShowFloatingMessage(101, 20000);
    WaitFor(!CharacterHasSpEffect(20000, 102610) || CharacterHasSpEffect(20000, 99230));
    HideFloatingMessage(101, 20000);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1170, Default, function() {
    DisableNetworkSync();
    WaitFor(EventFlag(4990));
    RecordUserDispLog(11250, 0, LogObjectType.None, -1);
    SetEventFlagID(4990, OFF);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(1180, Restart, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Singleplayer));
    WaitFor(EventFlag(7500));
    cond &= !AnyBatchEventFlags(7005, 7007);
    cond &= EventFlag(7515) || EventFlag(7510);
    WaitFor(cond);
    if (AnyBatchEventFlags(7010, 7012)) {
        if (IsPlayerNo(1)) {
            if (CharacterHasSpEffect(10002, 540155)) {
                cond &= CharacterHasSpEffect(10002, 540157) && InsidePlayArea(10002, 0);
                WaitFor(cond);
                SetSpEffect(10002, 540150);
                RemoveItemFromPlayer(ItemType.Goods, 700, 1);
            } else if (CharacterHasSpEffect(10002, 6999100)) {
                cond &= CharacterHasSpEffect(10002, 540157) && InsidePlayArea(10002, 0);
                WaitFor(cond);
                SetSpEffect(10002, 6999101);
                SetSpEffect(10002, 6999104);
                SetSpEffect(10002, 6999105);
                SetSpEffect(10002, 6999106);
                SetSpEffect(10002, 6999107);
            }
        }
L1:
        if (IsPlayerNo(2)) {
            if (CharacterHasSpEffect(10003, 540155)) {
                cond &= CharacterHasSpEffect(10003, 540157) && InsidePlayArea(10003, 0);
                WaitFor(cond);
                SetSpEffect(10003, 540150);
                RemoveItemFromPlayer(ItemType.Goods, 700, 1);
            } else if (CharacterHasSpEffect(10003, 6999100)) {
                cond &= CharacterHasSpEffect(10003, 540157) && InsidePlayArea(10003, 0);
                WaitFor(cond);
                SetSpEffect(10003, 6999101);
                SetSpEffect(10003, 6999104);
                SetSpEffect(10003, 6999105);
                SetSpEffect(10003, 6999106);
                SetSpEffect(10003, 6999107);
            }
        }
L2:
        if (IsPlayerNo(3)) {
            if (CharacterHasSpEffect(10004, 540155)) {
                cond &= CharacterHasSpEffect(10004, 540157) && InsidePlayArea(10004, 0);
                WaitFor(cond);
                SetSpEffect(10004, 540150);
                RemoveItemFromPlayer(ItemType.Goods, 700, 1);
            } else if (CharacterHasSpEffect(10004, 6999100)) {
                cond &= CharacterHasSpEffect(10004, 540157) && InsidePlayArea(10004, 0);
                WaitFor(cond);
                SetSpEffect(10004, 6999101);
                SetSpEffect(10004, 6999104);
                SetSpEffect(10004, 6999105);
                SetSpEffect(10004, 6999106);
                SetSpEffect(10004, 6999107);
            }
        }
L3:
        SaveRequest();
        WaitFor(AnyBatchEventFlags(7005, 7007) || ElapsedSeconds(20));
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    EndIf(EventFlag(7513));
    EnableCharacterInvincibility(10002);
    EnableCharacterInvincibility(10003);
    EnableCharacterInvincibility(10004);
    SetEventFlagID(9017, ON);
    WaitFor(ElapsedSeconds(2));
    if (AnyBatchEventFlags(7005, 7007)) {
        DisableCharacterInvincibility(10002);
        DisableCharacterInvincibility(10003);
        DisableCharacterInvincibility(10004);
        SetEventFlagID(9017, OFF);
        RestartEvent();
    }
    SetSpEffect(10002, 102140);
    SetSpEffect(10003, 102140);
    SetSpEffect(10004, 102140);
    WaitFor(ElapsedSeconds(2));
    EndIf(EventFlag(7513));
    UnknownTextEffect200721(3000);
    SetEventFlagID(7519, ON);
    DisplayTextEffectId(4010);
    SetEventFlagID(7516, ON);
    WaitFixedTimeSeconds(5);
    SetEventFlagID(7001, ON);
    EndEvent();
});

$Event(1181, Restart, function() {
    if (!HasMultiplayerState(MultiplayerState.Singleplayer)) {
        EndEvent();
    }
    WaitFor(EventFlag(7500));
    WaitFor((EventFlag(7515) || EventFlag(7510)) && CharacterHPValue(10000) > 0);
    WaitFor(
        (!EventFlag(7515) && !EventFlag(7510))
            || CharacterHPValue(10000) <= 0
            || CharacterHasTeamType(10000, TeamType.Unknown77));
    RestartIf(!EventFlag(7515) && !EventFlag(7510));
    if (CharacterHasSpEffect(20000, 8970061)) {
        WaitFor(
            (CharacterHPValue(20000) != 0 && !CharacterHasTeamType(10000, TeamType.Unknown77))
                || ElapsedSeconds(20));
        RestartEvent();
    }
    if (CharacterHasSpEffect(20000, 6999500)) {
        WaitFor(CharacterHasSpEffect(20000, 540157));
        SetSpEffect(20000, 6999505);
        SetSpEffect(20000, 6999501);
        WaitFor(CharacterHPValue(20000) != 0 && !CharacterHasTeamType(10000, TeamType.Unknown77));
        RestartEvent();
    }
    if (CharacterHasSpEffect(20000, 540155)) {
        WaitFor(CharacterHasSpEffect(20000, 540157));
        SetSpEffect(20000, 540150);
        RemoveItemFromPlayer(ItemType.Goods, 700, 1);
        WaitFor(CharacterHPValue(20000) != 0 && !CharacterHasTeamType(10000, TeamType.Unknown77));
        RestartEvent();
    }
    if (CharacterHasSpEffect(20000, 6999100)) {
        WaitFor(CharacterHasSpEffect(20000, 540157));
        SetSpEffect(20000, 6999101);
        SetSpEffect(20000, 6999104);
        SetSpEffect(20000, 6999105);
        SetSpEffect(20000, 6999106);
        SetSpEffect(20000, 6999107);
        WaitFor(CharacterHPValue(20000) != 0 && !CharacterHasTeamType(10000, TeamType.Unknown77));
        RestartEvent();
    }
    EndIf(EventFlag(7513));
    SetSpEffect(20000, 102140);
    SetEventFlagID(9017, ON);
    WaitFixedTimeSeconds(4);
    EndIf(EventFlag(7513));
    SetEventFlagID(7519, ON);
    DisplayTextEffectId(4010);
    SetEventFlagID(7516, ON);
    WaitFixedTimeSeconds(5);
    SetEventFlagID(7001, ON);
    EndEvent();
});

$Event(1182, Restart, function(eventFlagId) {
    DisableNetworkSync();
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    WaitFor(
        ((EventFlag(7515) || EventFlag(7510))
            && (CharacterHPValue(20000) > 0 || CharacterHasTeamType(20000, TeamType.Unknown77)))
            || !EventFlag(eventFlagId));
    WaitFor(
        !(CharacterHasTeamType(20000, TeamType.Human)
            || CharacterHasTeamType(20000, TeamType.WhitePhantom)
            || CharacterHasTeamType(20000, TeamType.Coop)
            || CharacterHasTeamType(20000, TeamType.Indiscriminate))
            || (!EventFlag(7515) && !EventFlag(7510))
            || !EventFlag(eventFlagId));
    RestartIf(!EventFlag(7515) && !EventFlag(7510));
    SetNetworkconnectedEventFlagID(eventFlagId, OFF);
    WaitFor(
        CharacterHasTeamType(20000, TeamType.Human)
            || CharacterHasTeamType(20000, TeamType.WhitePhantom)
            || CharacterHasTeamType(20000, TeamType.Coop)
            || CharacterHasTeamType(20000, TeamType.Indiscriminate)
            || EventFlag(eventFlagId));
    RestartEvent();
});

$Event(1183, Restart, function(eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    if (!(CharacterHasSpEffect(20000, 540155) || CharacterHasSpEffect(20000, 6999100))) {
        SetNetworkconnectedEventFlagID(eventFlagId, OFF);
    }
    spFlag = CharacterHasSpEffect(20000, 540155)
        || CharacterHasSpEffect(20000, 6999100)
        || EventFlag(eventFlagId);
    WaitFor(spFlag || ElapsedSeconds(10));
    RestartIf(!spFlag.Passed);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    spFlag2 = (!CharacterHasSpEffect(20000, 540155) && !CharacterHasSpEffect(20000, 6999100))
        || !EventFlag(eventFlagId);
    WaitFor(spFlag2 || ElapsedSeconds(10));
    RestartIf(!spFlag2.Passed);
    if (!EventFlag(eventFlagId)) {
        WaitFor(EventFlag(eventFlagId2));
    }
    RestartEvent();
});

$Event(1184, Restart, function(chrEntityId, eventFlagId, eventFlagId2) {
    WaitFor(
        !(CharacterHasTeamType(chrEntityId, TeamType.Human)
            || CharacterHasTeamType(chrEntityId, TeamType.WhitePhantom)
            || CharacterHasTeamType(chrEntityId, TeamType.Coop)
            || CharacterHasTeamType(chrEntityId, TeamType.Indiscriminate)
            || CharacterHasTeamType(chrEntityId, TeamType.Unknown77)
            || CharacterHasTeamType(chrEntityId, TeamType.Disabled))
            && (EventFlag(eventFlagId) || EventFlag(eventFlagId2))
            && PlayerIsInOwnWorld());
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(eventFlagId, OFF);
        SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
    }
    RestartEvent();
});

$Event(1187, Default, function() {
    if (!HasMultiplayerState(MultiplayerState.Singleplayer)) {
        EndEvent();
    }
    EndIf(EventFlag(7519));
    WaitFor(EventFlag(7516));
    UnknownTextEffect200721(3000);
    WaitFixedTimeFrames(2);
    RestartEvent();
});

$Event(1188, Restart, function() {
    DisableNetworkSync();
    EndIf(!EventFlag(8081));
    EndIf(EventFlag(8062) && !EventFlag(8025));
    WaitFor(EventFlag(8062) || CharacterHasSpEffect(20000, 8970060));
    WaitFor(EventFlag(8025) || CharacterHasSpEffect(20000, 8970060) || ElapsedSeconds(5));
    EndIf(!(EventFlag(8025) || CharacterHasSpEffect(20000, 8970060)));
    WaitFor(CharacterHasSpEffect(20000, 8970060));
    WaitFor(!CharacterHasSpEffect(20000, 8970063));
    if (EventFlagAndRandomCondition(6001, 0.3)) {
        SetSpEffect(20000, 8970061);
    }
    WaitFor(CharacterHasSpEffect(20000, 8970063));
    RestartEvent();
});

$Event(1190, Default, function() {
    WaitFor(
        EventFlag(47000800)
            || EventFlag(47100800)
            || EventFlag(47200800)
            || EventFlag(47300800)
            || EventFlag(47400800)
            || EventFlag(47700800)
            || EventFlag(47800800)
            || EventFlag(47900800)
            || EventFlag(48000800)
            || EventFlag(48100800)
            || EventFlag(48200800)
            || EventFlag(48300800)
            || EventFlag(48400800)
            || EventFlag(48500800)
            || EventFlag(48600800)
            || EventFlag(48700800)
            || EventFlag(48800800)
            || EventFlag(48900800)
            || EventFlag(49100800)
            || EventFlag(49170800)
            || EventFlag(49180800)
            || EventFlag(49190800)
            || EventFlag(49200800)
            || EventFlag(49210800)
            || EventFlag(49230800)
            || EventFlag(49240800)
            || EventFlag(49250800)
            || EventFlag(49260800)
            || EventFlag(49270800)
            || EventFlag(49280800)
            || EventFlag(49290800)
            || EventFlag(49300800)
            || EventFlag(49900800)
            // MMV events
            || EventFlag(49500800)
            || EventFlag(49510800)
            || EventFlag(49520800)
            || EventFlag(49530800)
            || EventFlag(49540800)
            || EventFlag(49550800)
            || EventFlag(49560800)
            || EventFlag(49570800)
            || EventFlag(49580800)
            || EventFlag(49590800)
            || EventFlag(49600800)
            || EventFlag(49610800)
            || EventFlag(49620800)
            || EventFlag(49630800)
            || EventFlag(49640800)
            || EventFlag(49650800)
            || EventFlag(49660800)
            || EventFlag(49670800)
            || EventFlag(49680800)
            || EventFlag(49690800)
            || EventFlag(49700800)
            || EventFlag(49710800)
            || EventFlag(49720800)
            || EventFlag(49730800)
            || EventFlag(49740800)
            || EventFlag(49750800));
    SetNetworkconnectedEventFlagID(7502, ON);
});

$Event(1191, Default, function() {
    WaitFor(
        EventFlag(47000850)
            || EventFlag(47100850)
            || EventFlag(47200850)
            || EventFlag(47300850)
            || EventFlag(47400850)
            || EventFlag(47700850)
            || EventFlag(47800850)
            || EventFlag(47900850)
            || EventFlag(48000850)
            || EventFlag(48100850)
            || EventFlag(48200850)
            || EventFlag(48300850)
            || EventFlag(48400850)
            || EventFlag(48500850)
            || EventFlag(48600850)
            || EventFlag(48700850)
            || EventFlag(48800850)
            || EventFlag(48900850)
            || EventFlag(49100850)
            || EventFlag(49170850)
            || EventFlag(49180850)
            || EventFlag(49190850)
            || EventFlag(49200850)
            || EventFlag(49210850)
            || EventFlag(49230850)
            || EventFlag(49240850)
            || EventFlag(49250850)
            || EventFlag(49260850)
            || EventFlag(49270850)
            || EventFlag(49280850)
            || EventFlag(49290850)
            || EventFlag(49300850)
            || EventFlag(49900850)
            // MMV events
            || EventFlag(49500850)
            || EventFlag(49510850)
            || EventFlag(49520850)
            || EventFlag(49530850)
            || EventFlag(49540850)
            || EventFlag(49550850)
            || EventFlag(49560850)
            || EventFlag(49570850)
            || EventFlag(49580850)
            || EventFlag(49590850)
            || EventFlag(49600850)
            || EventFlag(49610850)
            || EventFlag(49620850)
            || EventFlag(49630850)
            || EventFlag(49640850)
            || EventFlag(49650850)
            || EventFlag(49660850)
            || EventFlag(49670850)
            || EventFlag(49680850)
            || EventFlag(49690850)
            || EventFlag(49700850)
            || EventFlag(49710850)
            || EventFlag(49720850)
            || EventFlag(49730850)
            || EventFlag(49740850)
            || EventFlag(49750850));
    SetNetworkconnectedEventFlagID(7507, ON);
});

$Event(1200, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Singleplayer));
    EndIf(EventFlag(7510));
    EndIf(EventFlag(7523));
    WaitFor(EventFlag(7523));
    SetNetworkconnectedEventFlagID(9052, ON);
    WarpPlayerWithPlayerNo(12, 0, 0, 0, 12002310);
});

$Event(1201, Default, function() {
    DisableAsset(1060001501);
    EndIf(!EventFlag(7605));
    DisableAsset(1060001500);
    EnableAsset(1060001501);
});

$Event(1202, Default, function() {
    DisableAsset(1060001502);
    EndIf(!EventFlag(7602));
    DisableAsset(1060001500);
    DisableAsset(1060001510);
    EnableAsset(1060001502);
});

$Event(1203, Default, function() {
    DisableNetworkSync();
    EndIf(!EventFlag(7604));
    if (InsidePlayArea(20000, 0)) {
        SetSpEffect(20000, 98222);
    }
    WaitFor(!InsidePlayArea(20000, 0));
    SetSpEffect(20000, 98220);
    WaitFor(!CharacterHasSpEffect(20000, 98220) || InsidePlayArea(20000, 0));
    SetSpEffect(20000, 98222);
    WaitFixedTimeSeconds(0.5);
    RestartEvent();
});

$Event(1210, Default, function() {
    DisableNetworkSync();
    WaitFor(EventFlag(1056304580) || EventFlag(9192));
    SetEventFlagID(1056304581, ON);
});

$Event(1211, Default, function() {
    EndIf(EventFlag(8230));
    if (!SmallBaseAttached(1036402601, 52100000)) {
        if (!SmallBaseAttached(1038402600, 52100000)) {
            if (!SmallBaseAttached(1047402602, 52100000)) {
                if (!SmallBaseAttached(1049402600, 52100000)) {
                    if (!SmallBaseAttached(1042362990, 52100000)) {
                        if (!SmallBaseAttached(1042382990, 52100000)) {
                            if (!SmallBaseAttached(1043362990, 52100000)) {
                                if (!SmallBaseAttached(1043362991, 52100000)) {
                                    if (!SmallBaseAttached(1043372990, 52100000)) {
                                        if (!SmallBaseAttached(1043382991, 52100000)) {
                                            if (!SmallBaseAttached(1044372990, 52100000)) {
                                                if (!SmallBaseAttached(1044392990, 52100000)) {
                                                    if (!SmallBaseAttached(1037502990, 52100000)) {
                                                        if (!SmallBaseAttached(1045392990, 52100000)) {
                                                            if (!SmallBaseAttached(1045362998, 52100000)) {
                                                                if (!SmallBaseAttached(1045372998, 52100000)) {
                                                                    if (!SmallBaseAttached(1046302989, 52100000)) {
                                                                        if (!SmallBaseAttached(1057302989, 52100000)) {
                                                                            if (!SmallBaseAttached(1038102990, 52100000)) {
                                                                                if (!SmallBaseAttached(1039202910, 52100000)) {
                                                                                    if (!SmallBaseAttached(1042392989, 52100000)) {
                                                                                        if (!SmallBaseAttached(1047502990, 52100000)) {
                                                                                            EndEvent();
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
L0:
    SetNetworkconnectedEventFlagID(8230, ON);
});

$Event(1212, Default, function() {
    if (EventFlag(8231)) {
        SetNetworkconnectedEventFlagID(8232, OFF);
        EndEvent();
    }
    WaitFor(EventFlag(8230));
    SetNetworkconnectedEventFlagID(8232, ON);
    WaitFor(EventFlag(8231));
    SetNetworkconnectedEventFlagID(8232, OFF);
});

$Event(1300, Default, function() {
    DisableNetworkSync();
    EndIf(PlayerInMap(18, 0, 0, 0));
    EndIf(PlayerInMap(11, 0, 0, 0));
    WaitFixedTimeSeconds(2);
    if (EventFlag(7500) && !EventFlag(7505)) {
        DisplayTextEffectId(4099);
    }
    if (EventFlag(7505) && !EventFlag(7510)) {
        DisplayTextEffectId(4100);
    }
    if (EventFlag(7500) && !EventFlag(7505)) {
        WaitFor(EventFlag(7505));
        WaitFixedTimeSeconds(4);
        DisplayTextEffectId(4100);
    }
});

$Event(1301, Default, function() {
    DisableNetworkSync();
    if (!IsRequestGameMode(3)) {
        if (!EventFlag(6013)) {
            WaitFor(
                (EventFlag(7515) && InsidePlayArea(10000, 0))
                    || (EventFlag(7510) && !EventFlag(7513))
                    || EventFlag(9015));
            SetEventFlagID(9015, ON);
            WaitFor((!EventFlag(7515) && !EventFlag(7510)) || EventFlag(7513) || !EventFlag(9015));
            SetEventFlagID(9015, OFF);
            RestartEvent();
        }
    }
L0:
    SetEventFlagID(9015, ON);
});

$Event(1302, Default, function() {
    DisableNetworkSync();
    WaitFor(EventFlag(9015) || CharacterHasSpEffect(10000, 102120));
    SetSpEffect(10000, 102120);
    WaitFor(!EventFlag(9015) || !CharacterHasSpEffect(10000, 102120));
    SetSpEffect(20000, 102121);
    RestartEvent();
});

$Event(1303, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(9050));
    if (EventFlag(7502)) {
        AddEstusCharge();
        RefillEstus();
        EndEvent();
    }
    WaitFor(EventFlag(7502));
    SpawnOneshotSFX(TargetEntityType.Character, 20000, 905, 305033);
    AddEstusCharge();
    RefillEstus();
    RecordUserDispLog(11251, 20000, LogObjectType.None, -1);
});

$Event(1304, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(9051));
    if (EventFlag(7507)) {
        AddEstusCharge();
        RefillEstus();
        SetEventFlagID(9051, ON);
        EndEvent();
    }
    WaitFor(EventFlag(7507));
    WaitFixedTimeSeconds(3);
    SetSpEffect(20000, 99270);
    AddEstusCharge();
    RefillEstus();
    SetEventFlagID(9051, ON);
    WaitFixedTimeSeconds(0.5);
    RecordUserDispLog(11251, 20000, LogObjectType.None, -1);
});

$Event(1305, Default, function() {
    DisableNetworkSync();
    WaitFor(
        IsGameMode(2) && (EventFlag(7516) || EventFlag(7512)) && (IsPlayMode(0) || IsPlayMode(1)));
    SetEventFlagID(6090, OFF);
    SetEventFlagID(6091, OFF);
    SetEventFlagID(6092, OFF);
    SetEventFlagID(6093, OFF);
    SetEventFlagID(6094, OFF);
    SetEventFlagID(6095, OFF);
    GotoIf(L1, EventFlag(7602));
    GotoIf(L2, EventFlag(7601));
    GotoIf(L3, EventFlag(7603));
    GotoIf(L4, EventFlag(7605));
    GotoIf(L5, EventFlag(7604));
    SetEventFlagID(6095, ON);
    EndEvent();
L1:
    SetEventFlagID(6090, ON);
    EndEvent();
L2:
    SetEventFlagID(6091, ON);
    EndEvent();
L3:
    SetEventFlagID(6092, ON);
    EndEvent();
L4:
    SetEventFlagID(6093, ON);
    EndEvent();
L5:
    SetEventFlagID(6094, ON);
    EndEvent();
});

$Event(1306, Default, function() {
    DisableNetworkSync();
    EndIf(!IsGameMode(2));
    SetSpEffect(20000, 7998000);
    SetSpEffect(20000, 7998003);
});

$Event(1307, Restart, function() {
    DisableNetworkSync();
    EndIf(!IsGameMode(2));
    WaitFor(
        HasMultiplayerState(MultiplayerState.Singleplayer) || CharacterHasSpEffect(20000, 99240));
    SetSpEffect(20000, 99240);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Multiplayer) || !CharacterHasSpEffect(20000, 99240));
    ClearSpEffect(20000, 99240);
    RestartEvent();
});

$Event(1308, Restart, function() {
    DisableNetworkSync();
    EndIf(!IsGameMode(2));
    WaitFor(IsPlayerCount(2) || CharacterHasSpEffect(20000, 99241));
    SetSpEffect(20000, 99241);
    WaitFor(!IsPlayerCount(2) || !CharacterHasSpEffect(20000, 99241));
    ClearSpEffect(20000, 99241);
    RestartEvent();
});

$Event(1309, Restart, function() {
    DisableNetworkSync();
    EndIf(!(IsGameMode(2) || IsGameMode(4)));
    EndIf(EventFlag(9052));
    WaitFor(
        !(WeatherActive(Weather.Type83, 0, 0) || WeatherActive(Weather.Type81, 0, 0))
            && (InArea(20000, 1045372400) || InArea(20000, 1029102400)));
    if (InArea(20000, 1045372400)) {
        ChangeWeather(Weather.Type51, -1, false);
        areaFlag = !InArea(20000, 1045372400) || EventFlag(9052);
        cond = WeatherActive(Weather.Type83, 0, 0) || WeatherActive(Weather.Type81, 0, 0);
        WaitFor(areaFlag || cond);
        RestartIf(cond.Passed);
        ChangeWeather(Weather.Type00, -1, false);
        RestartEvent();
    }
L0:
    if (InArea(20000, 1029102400)) {
        ChangeWeather(Weather.Type40, -1, false);
        cond2 = !InArea(20000, 1029102400) || EventFlag(9052);
        cond3 = WeatherActive(Weather.Type83, 0, 0) || WeatherActive(Weather.Type81, 0, 0);
        WaitFor(cond2 || cond3);
        RestartIf(cond3.Passed);
        ChangeWeather(Weather.Type00, -1, false);
        RestartEvent();
    }
L1:
    NoOp();
});

$Event(1310, Restart, function(eventFlagId) {
    DisableNetworkSync();
    EndIf(!IsGameMode(2));
    WaitFor(
        EventFlag(9015)
            && CharacterHasTeamType(20000, TeamType.Unknown77)
            && CharacterHasSpEffect(20000, 540157)
            && !InsidePlayArea(20000, 0));
    cond = !AnyBatchEventFlags(7005, 7007) && EventFlag(eventFlagId);
    flagChr = !EventFlag(9015) || !CharacterHasTeamType(20000, TeamType.Unknown77) || InsidePlayArea(20000, 0);
    WaitFor(ElapsedSeconds(15) || cond || flagChr);
    EndIf(EventFlag(7516));
    RestartIf(flagChr.Passed);
    SetSpEffect(20000, 102145);
    WaitFor(
        !EventFlag(9015)
            || !CharacterHasTeamType(20000, TeamType.Unknown77)
            || InsidePlayArea(20000, 0));
    RestartEvent();
});

$Event(1311, Default, function() {
    DisableNetworkSync();
    WaitFor(IsGameMode(2) && EventFlag(7516));
    GotoIf(L0, !EventFlag(105));
    GotoIf(L1, !EventFlag(106));
    Goto(L2);
L0:
    SetEventFlagID(105, ON);
    SetEventFlagID(106, OFF);
    EndEvent();
L1:
    SetEventFlagID(105, ON);
    SetEventFlagID(106, ON);
    EndEvent();
L2:
    EndEvent();
});

$Event(1312, Default, function() {
    DisableNetworkSync();
    WaitFor(IsGameMode(2) && (EventFlag(7516) || EventFlag(7512)));
    SetEventFlagID(9089, OFF);
    SetEventFlagID(9090, OFF);
    SetEventFlagID(9091, OFF);
    SetEventFlagID(9092, OFF);
    SetEventFlagID(9093, OFF);
    SetEventFlagID(9094, OFF);
    SetEventFlagID(9095, OFF);
    SetEventFlagID(9096, OFF);
    SetEventFlagID(9097, OFF);
    SetEventFlagID(9098, OFF);
    SetEventFlagID(9099, OFF);
    if (IsCampaignSession()) {
        SetEventFlagID(9089, ON);
    }
L0:
    GotoIf(L1, TargetingBoss(TargetBoss.Gladius));
    GotoIf(L2, TargetingBoss(TargetBoss.Adel));
    GotoIf(L3, TargetingBoss(TargetBoss.Gnoster));
    GotoIf(L4, TargetingBoss(TargetBoss.Maris));
    GotoIf(L5, TargetingBoss(TargetBoss.Libra));
    GotoIf(L6, TargetingBoss(TargetBoss.Fulghor));
    GotoIf(L7, TargetingBoss(TargetBoss.Caligo));
    GotoIf(L8, TargetingBoss(TargetBoss.Heolstor));
    GotoIf(L9, TargetingBoss(TargetBoss.Harmonia));
    GotoIf(L10, TargetingBoss(TargetBoss.Straghess));
    EndEvent();
L1:
    SetEventFlagID(9090, ON);
    EndEvent();
L2:
    SetEventFlagID(9091, ON);
    EndEvent();
L3:
    SetEventFlagID(9092, ON);
    EndEvent();
L4:
    SetEventFlagID(9093, ON);
    EndEvent();
L5:
    SetEventFlagID(9094, ON);
    EndEvent();
L6:
    SetEventFlagID(9095, ON);
    EndEvent();
L7:
    SetEventFlagID(9096, ON);
    EndEvent();
L8:
    SetEventFlagID(9097, ON);
    EndEvent();
L9:
    SetEventFlagID(9098, ON);
    EndEvent();
L10:
    SetEventFlagID(9099, ON);
    EndEvent();
});

$Event(1313, Default, function() {
    DisableNetworkSync();
    EndIf(EventFlag(131));
    WaitFor(IsGameMode(2) && IsPlayMode(2) && (EventFlag(7516) || EventFlag(7512)));
    SetEventFlagID(131, ON);
    EndEvent();
});

$Event(1314, Default, function() {
    DisableNetworkSync();
    WaitFor((EventFlag(7506) && EventFlag(9015)) || EventFlag(7507));
    SetEventFlagID(9018, ON);
});

$Event(1320, Restart, function(spEffectId, spEffectId2) {
    WaitFor(CharacterHasSpEffect(20000, spEffectId));
    ClearSpEffect(20000, spEffectId);
    WaitFor(!InsidePlayArea(20000, 0) || ElapsedFrames(1));
    if (!InsidePlayArea(20000, 0)) {
        SetSpEffect(20000, spEffectId2);
    }
    RestartEvent();
});

$Event(1325, Restart, function() {
    DisableNetworkSync();
    if (!EventFlag(7508)) {
        WaitFor(EventFlag(7508));
        WaitFixedTimeSeconds(4);
    }
L0:
    WaitFor(!CharacterHasSpEffect(20000, 99271));
    SetSpEffect(20000, 99271);
    WaitFor(!CharacterHasSpEffect(20000, 99271));
    RestartEvent();
});

$Event(1330, Restart, function(areaEntityId) {
    DisableNetworkSync();
    WaitFor(InArea(20000, areaEntityId));
    SetSpEffect(20000, 16166);
    WaitFor(!InArea(20000, areaEntityId));
    SetSpEffect(20000, 16167);
    RestartEvent();
});

$Event(1340, Restart, function() {
    DisableNetworkSync();
    EndIf(!IsGameMode(2));
    EndIf(EventFlag(6302));
    WaitFor(EventFlag(7500));
    WaitFor(EventFlag(8230) || ElapsedSeconds(5));
    EndIf(!EventFlag(8230));
    WaitFor(PlayerHasItem(ItemType.Goods, 11027));
    SetEventFlagID(6302, ON);
    SaveRequest();
});

$Event(1350, Restart, function(areaEntityId) {
    DisableNetworkSync();
    WaitFor(InArea(20000, areaEntityId));
    SetSpEffect(20000, 16166);
    WaitFor(!InArea(20000, areaEntityId));
    SetSpEffect(20000, 16167);
    RestartEvent();
});

$Event(1370, Restart, function(areaEntityId, areaEntityId2) {
    DisableNetworkSync();
    WaitFor(InArea(20000, areaEntityId) || InArea(20000, areaEntityId2));
    SetSpEffect(20000, 16166);
    WaitFor(!InArea(20000, areaEntityId) && !InArea(20000, areaEntityId2));
    SetSpEffect(20000, 16167);
    RestartEvent();
});

$Event(1400, Restart, function(spEffectId, spEffectId2) {
    DisableNetworkSync();
    EndIf(!CharacterHasSpEffect(20000, spEffectId));
    if (EventValue(9125, 4) < 1) {
        WaitFor(EventValue(8145, 4) >= 1);
        IncrementEventValue(9125, 4, 7);
        SetSpEffect(20000, spEffectId2);
        WaitFixedTimeFrames(1);
    }
L1:
    if (EventValue(9125, 4) < 2) {
        WaitFor(EventValue(8145, 4) >= 2);
        IncrementEventValue(9125, 4, 7);
        SetSpEffect(20000, spEffectId2);
        WaitFixedTimeFrames(1);
    }
L2:
    if (EventValue(9125, 4) < 3) {
        WaitFor(EventValue(8145, 4) >= 3);
        IncrementEventValue(9125, 4, 7);
        SetSpEffect(20000, spEffectId2);
        WaitFixedTimeFrames(1);
    }
L3:
    if (EventValue(9125, 4) < 4) {
        WaitFor(EventValue(8145, 4) >= 4);
        IncrementEventValue(9125, 4, 7);
        SetSpEffect(20000, spEffectId2);
        WaitFixedTimeFrames(1);
    }
L4:
    if (EventValue(9125, 4) < 5) {
        WaitFor(EventValue(8145, 4) >= 5);
        IncrementEventValue(9125, 4, 7);
        SetSpEffect(20000, spEffectId2);
        WaitFixedTimeFrames(1);
    }
L5:
    if (EventValue(9125, 4) < 6) {
        WaitFor(EventValue(8145, 4) >= 6);
        IncrementEventValue(9125, 4, 7);
        SetSpEffect(20000, spEffectId2);
        WaitFixedTimeFrames(1);
    }
L6:
    if (EventValue(9125, 4) < 7) {
        WaitFor(EventValue(8145, 4) >= 7);
        IncrementEventValue(9125, 4, 7);
        SetSpEffect(20000, spEffectId2);
        WaitFixedTimeFrames(1);
    }
L7:
    NoOp();
});

$Event(1401, Default, function() {
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 46500800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 146500800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 246500800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 346500800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 446500800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 546500800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 646500800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 746500800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 846500800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 946500800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 46600800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 146600800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 246600800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 346600800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 446600800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 546600800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 646600800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 746600800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 846600800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 946600800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 46700800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 146700800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 246700800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 346700800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 446700800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 546700800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 646700800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 746700800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 846700800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 946700800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 46800800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 146800800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 246800800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 346800800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 446800800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 546800800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 646800800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 746800800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 846800800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 946800800));
    IncrementNetworkconnectedEventValue(8145, 4, 7);
    RestartEvent();
});

$Event(1402, Restart, function(spEffectId, spEffectId2) {
    DisableNetworkSync();
    EndIf(!CharacterHasSpEffect(20000, spEffectId));
    if (EventValue(9135, 3) < 1) {
        WaitFor(EventValue(8155, 3) >= 1);
        IncrementEventValue(9135, 3, 4);
        SetSpEffect(20000, spEffectId2);
        WaitFixedTimeFrames(1);
    }
L1:
    if (EventValue(9135, 3) < 2) {
        WaitFor(EventValue(8155, 3) >= 2);
        IncrementEventValue(9135, 3, 4);
        SetSpEffect(20000, spEffectId2);
        WaitFixedTimeFrames(1);
    }
L2:
    if (EventValue(9135, 3) < 3) {
        WaitFor(EventValue(8155, 3) >= 3);
        IncrementEventValue(9135, 3, 4);
        SetSpEffect(20000, spEffectId2);
        WaitFixedTimeFrames(1);
    }
L3:
    if (EventValue(9135, 3) < 4) {
        WaitFor(EventValue(8155, 3) >= 4);
        IncrementEventValue(9135, 3, 4);
        SetSpEffect(20000, spEffectId2);
        WaitFixedTimeFrames(1);
    }
L4:
    NoOp();
});

$Event(1403, Default, function(spEffectId, spEffectId2) {
    DisableNetworkSync();
    EndIf(!CharacterHasSpEffect(20000, spEffectId));
    if (EventValue(9120, 4) < 1) {
        WaitFor(EventValue(8140, 4) >= 1);
        IncrementEventValue(9120, 4, 7);
        SetSpEffect(20000, spEffectId2);
        WaitFixedTimeFrames(1);
    }
L1:
    if (EventValue(9120, 4) < 2) {
        WaitFor(EventValue(8140, 4) >= 2);
        IncrementEventValue(9120, 4, 7);
        SetSpEffect(20000, spEffectId2);
        WaitFixedTimeFrames(1);
    }
L2:
    if (EventValue(9120, 4) < 3) {
        WaitFor(EventValue(8140, 4) >= 3);
        IncrementEventValue(9120, 4, 7);
        SetSpEffect(20000, spEffectId2);
        WaitFixedTimeFrames(1);
    }
L3:
    if (EventValue(9120, 4) < 4) {
        WaitFor(EventValue(8140, 4) >= 4);
        IncrementEventValue(9120, 4, 7);
        SetSpEffect(20000, spEffectId2);
        WaitFixedTimeFrames(1);
    }
L4:
    if (EventValue(9120, 4) < 5) {
        WaitFor(EventValue(8140, 4) >= 5);
        IncrementEventValue(9120, 4, 7);
        SetSpEffect(20000, spEffectId2);
        WaitFixedTimeFrames(1);
    }
L5:
    if (EventValue(9120, 4) < 6) {
        WaitFor(EventValue(8140, 4) >= 6);
        IncrementEventValue(9120, 4, 7);
        SetSpEffect(20000, spEffectId2);
        WaitFixedTimeFrames(1);
    }
L6:
    if (EventValue(9120, 4) < 7) {
        WaitFor(EventValue(8140, 4) >= 7);
        IncrementEventValue(9120, 4, 7);
        SetSpEffect(20000, spEffectId2);
        WaitFixedTimeFrames(1);
    }
L7:
    NoOp();
});

$Event(1404, Default, function() {
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 40000500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 140000500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 240000500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 340000500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 440000500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 540000500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 640000500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 740000500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 840000500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 940000500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 40900500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 140900500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 240900500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 340900500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 440900500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 540900500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 640900500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 740900500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 840900500)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 940900500));
    IncrementNetworkconnectedEventValue(8140, 4, 7);
    RestartEvent();
});

$Event(1405, Restart, function(spEffectId, eventFlagId) {
    DisableNetworkSync();
    EndIf(!CharacterHasSpEffect(20000, spEffectId));
    SetEventFlagID(eventFlagId, ON);
});

$Event(1406, Default, function(spEffectId, spEffectId2, spEffectId3, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(20000, spEffectId));
    if (EventValue(eventFlagId2, 4) < 1) {
        WaitFor(EventValue(eventFlagId, 4) >= 1);
        IncrementEventValue(eventFlagId2, 4, 10);
        SetSpEffect(20000, spEffectId2);
        if (Signed(spEffectId3) != 0) {
            SetSpEffect(20000, spEffectId3);
        }
        WaitFixedTimeFrames(1);
    }
L1:
    if (EventValue(eventFlagId2, 4) < 2) {
        WaitFor(EventValue(eventFlagId, 4) >= 2);
        IncrementEventValue(eventFlagId2, 4, 10);
        SetSpEffect(20000, spEffectId2);
        if (Signed(spEffectId3) != 0) {
            SetSpEffect(20000, spEffectId3);
        }
        WaitFixedTimeFrames(1);
    }
L2:
    if (EventValue(eventFlagId2, 4) < 3) {
        WaitFor(EventValue(eventFlagId, 4) >= 3);
        IncrementEventValue(eventFlagId2, 4, 10);
        SetSpEffect(20000, spEffectId2);
        if (Signed(spEffectId3) != 0) {
            SetSpEffect(20000, spEffectId3);
        }
        WaitFixedTimeFrames(1);
    }
L3:
    if (EventValue(eventFlagId2, 4) < 4) {
        WaitFor(EventValue(eventFlagId, 4) >= 4);
        IncrementEventValue(eventFlagId2, 4, 10);
        SetSpEffect(20000, spEffectId2);
        if (Signed(spEffectId3) != 0) {
            SetSpEffect(20000, spEffectId3);
        }
        WaitFixedTimeFrames(1);
    }
L4:
    if (EventValue(eventFlagId2, 4) < 5) {
        WaitFor(EventValue(eventFlagId, 4) >= 5);
        IncrementEventValue(eventFlagId2, 4, 10);
        SetSpEffect(20000, spEffectId2);
        if (Signed(spEffectId3) != 0) {
            SetSpEffect(20000, spEffectId3);
        }
        WaitFixedTimeFrames(1);
    }
L5:
    if (EventValue(eventFlagId2, 4) < 6) {
        WaitFor(EventValue(eventFlagId, 4) >= 6);
        IncrementEventValue(eventFlagId2, 4, 10);
        SetSpEffect(20000, spEffectId2);
        if (Signed(spEffectId3) != 0) {
            SetSpEffect(20000, spEffectId3);
        }
        WaitFixedTimeFrames(1);
    }
L6:
    if (EventValue(eventFlagId2, 4) < 7) {
        WaitFor(EventValue(eventFlagId, 4) >= 7);
        IncrementEventValue(eventFlagId2, 4, 10);
        SetSpEffect(20000, spEffectId2);
        if (Signed(spEffectId3) != 0) {
            SetSpEffect(20000, spEffectId3);
        }
        WaitFixedTimeFrames(1);
    }
L7:
    if (EventValue(eventFlagId2, 4) < 8) {
        WaitFor(EventValue(eventFlagId, 4) >= 8);
        IncrementEventValue(eventFlagId2, 4, 10);
        SetSpEffect(20000, spEffectId2);
        if (Signed(spEffectId3) != 0) {
            SetSpEffect(20000, spEffectId3);
        }
        WaitFixedTimeFrames(1);
    }
L8:
    if (EventValue(eventFlagId2, 4) < 9) {
        WaitFor(EventValue(eventFlagId, 4) >= 9);
        IncrementEventValue(eventFlagId2, 4, 10);
        SetSpEffect(20000, spEffectId2);
        if (Signed(spEffectId3) != 0) {
            SetSpEffect(20000, spEffectId3);
        }
        WaitFixedTimeFrames(1);
    }
L9:
    if (EventValue(eventFlagId2, 4) < 10) {
        WaitFor(EventValue(eventFlagId, 4) >= 10);
        IncrementEventValue(eventFlagId2, 4, 10);
        SetSpEffect(20000, spEffectId2);
        if (Signed(spEffectId3) != 0) {
            SetSpEffect(20000, spEffectId3);
        }
        WaitFixedTimeFrames(1);
    }
L10:
    NoOp();
});

$Event(1450, Default, function(spEffectId, spEffectId2) {
    DisableNetworkSync();
    ClearSpEffect(20000, spEffectId2);
    ClearSpEffect(20000, spEffectId2);
    ClearSpEffect(20000, spEffectId2);
    ClearSpEffect(20000, spEffectId2);
    ClearSpEffect(20000, spEffectId2);
    ClearSpEffect(20000, spEffectId2);
    ClearSpEffect(20000, spEffectId2);
    ClearSpEffect(20000, spEffectId2);
    ClearSpEffect(20000, spEffectId2);
    ClearSpEffect(20000, spEffectId2);
    WaitFor(CharacterHasSpEffect(20000, spEffectId));
    if (EventValue(9130, 4) < 1) {
        WaitFor(TeamOpenedBonfires() >= 1);
        IncrementEventValue(9130, 4, 10);
    }
L1:
    SetSpEffect(20000, spEffectId2);
    WaitFixedTimeFrames(1);
    if (EventValue(9130, 4) < 2) {
        WaitFor(
            TeamOpenedBonfires() >= 2
                || !CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
        GotoIf(L20, !CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
        IncrementEventValue(9130, 4, 10);
    }
L2:
    SetSpEffect(20000, spEffectId2);
    WaitFixedTimeFrames(1);
    if (EventValue(9130, 4) < 3) {
        WaitFor(
            TeamOpenedBonfires() >= 3
                || !CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
        GotoIf(L20, !CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
        IncrementEventValue(9130, 4, 10);
    }
L3:
    SetSpEffect(20000, spEffectId2);
    WaitFixedTimeFrames(1);
    if (EventValue(9130, 4) < 4) {
        WaitFor(
            TeamOpenedBonfires() >= 4
                || !CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
        GotoIf(L20, !CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
        IncrementEventValue(9130, 4, 10);
    }
L4:
    SetSpEffect(20000, spEffectId2);
    WaitFixedTimeFrames(1);
    if (EventValue(9130, 4) < 5) {
        WaitFor(
            TeamOpenedBonfires() >= 5
                || !CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
        GotoIf(L20, !CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
        IncrementEventValue(9130, 4, 10);
    }
L5:
    SetSpEffect(20000, spEffectId2);
    WaitFixedTimeFrames(1);
    if (EventValue(9130, 4) < 6) {
        WaitFor(
            TeamOpenedBonfires() >= 6
                || !CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
        GotoIf(L20, !CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
        IncrementEventValue(9130, 4, 10);
    }
L6:
    SetSpEffect(20000, spEffectId2);
    WaitFixedTimeFrames(1);
    if (EventValue(9130, 4) < 7) {
        WaitFor(
            TeamOpenedBonfires() >= 7
                || !CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
        GotoIf(L20, !CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
        IncrementEventValue(9130, 4, 10);
    }
L7:
    SetSpEffect(20000, spEffectId2);
    WaitFixedTimeFrames(1);
    if (EventValue(9130, 4) < 8) {
        WaitFor(
            TeamOpenedBonfires() >= 8
                || !CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
        GotoIf(L20, !CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
        IncrementEventValue(9130, 4, 10);
    }
L8:
    SetSpEffect(20000, spEffectId2);
    WaitFixedTimeFrames(1);
    if (EventValue(9130, 4) < 9) {
        WaitFor(
            TeamOpenedBonfires() >= 9
                || !CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
        GotoIf(L20, !CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
        IncrementEventValue(9130, 4, 10);
    }
L9:
    SetSpEffect(20000, spEffectId2);
    WaitFixedTimeFrames(1);
    if (EventValue(9130, 4) < 10) {
        WaitFor(
            TeamOpenedBonfires() >= 10
                || !CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
        GotoIf(L20, !CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
        IncrementEventValue(9130, 4, 10);
    }
L10:
    SetSpEffect(20000, spEffectId2);
    WaitFixedTimeFrames(1);
    WaitFor(!CharacterHasSpEffect(20000, spEffectId2, GreaterOrEqual, 1));
L20:
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

$Event(1500, Restart, function() {
    if (!EventFlag(6013)) {
        if (!EventFlag(6011)) {
            SetEventFlagID(72200, ON);
            SetEventFlagID(72201, ON);
            EndEvent();
        }
L0:
        SetEventFlagID(72200, OFF);
        SetEventFlagID(72201, OFF);
        EndEvent();
    }
L1:
    SetEventFlagID(72200, OFF);
    SetEventFlagID(72201, ON);
    EndEvent();
});

$Event(1505, Restart, function(eventFlagId, eventFlagId2) {
    if (!EventFlag(eventFlagId2)) {
        SetEventFlagID(eventFlagId, ON);
        EndEvent();
    }
    SetEventFlagID(eventFlagId, OFF);
    EndEvent();
});

$Event(1506, Restart, function(eventFlagId, eventFlagId2) {
    if (!(EventFlag(eventFlagId2) || EventFlag(6011))) {
        SetEventFlagID(eventFlagId, OFF);
        EndEvent();
    }
    SetEventFlagID(eventFlagId, ON);
    EndEvent();
});

$Event(1510, Restart, function(eventFlagId, eventFlagId2) {
    if (!EventFlag(eventFlagId2)) {
        SetEventFlagID(eventFlagId, ON);
        EndEvent();
    }
    SetEventFlagID(eventFlagId, OFF);
    EndEvent();
});

$Event(1519, Restart, function(eventFlagId, eventFlagId2) {
    if (!(EventFlag(eventFlagId2) || EventFlag(6011))) {
        SetEventFlagID(eventFlagId, OFF);
        EndEvent();
    }
    SetEventFlagID(eventFlagId, ON);
    EndEvent();
});

$Event(1520, Restart, function(missionId, eventFlagId, eventFlagId2, hero) {
    DisableNetworkSync();
    EndIf(!MissionActive(missionId));
    if (IsPlayerNo(1)) {
        EndIf(!EventFlag(7015));
    }
    if (IsPlayerNo(2)) {
        EndIf(!EventFlag(7016));
    }
    if (IsPlayerNo(3)) {
        EndIf(!EventFlag(7017));
    }
    EndIf(!IsHero(hero));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(1590, Default, function() {
    EndIf(!MissionActive(602));
    EndIf(!IsHero(Hero.Revenant));
    WaitFor(EventFlag(9205));
    SetNetworkconnectedEventFlagID(8456, ON);
    SetNetworkconnectedEventFlagID(8457, ON);
    SetNetworkconnectedEventFlagID(8458, ON);
    SetNetworkconnectedEventFlagID(8459, ON);
    SetNetworkconnectedEventFlagID(8460, ON);
    SetNetworkconnectedEventFlagID(8461, ON);
    SetNetworkconnectedEventFlagID(8462, ON);
    SetNetworkconnectedEventFlagID(8463, ON);
    SetNetworkconnectedEventFlagID(8464, ON);
});

$Event(1591, Default, function() {
    EndIf(!MissionActive(801));
    EndIf(!IsHero(Hero.Executor));
    WaitFor(EventFlag(9215));
    SetNetworkconnectedEventFlagID(9261, ON);
    SetNetworkconnectedEventFlagID(9262, ON);
    SetNetworkconnectedEventFlagID(9263, ON);
    SetNetworkconnectedEventFlagID(9264, ON);
    SetNetworkconnectedEventFlagID(9265, ON);
    SetNetworkconnectedEventFlagID(9266, ON);
    SetNetworkconnectedEventFlagID(9267, ON);
});

$Event(1592, Default, function(eventFlagId, eventFlagId2, eventFlagId3, hero, missionId) {
    DisableNetworkSync();
    EndIf(!MissionActive(101));
    if (IsPlayerNo(1)) {
        EndIf(!EventFlag(7015));
    }
    if (IsPlayerNo(2)) {
        EndIf(!EventFlag(7016));
    }
    if (IsPlayerNo(3)) {
        EndIf(!EventFlag(7017));
    }
    EndIf(!IsHero(hero));
    EndIf(!HasMissionState(missionId, 1));
    EndIf(EventFlag(8325));
    SetEventFlagID(eventFlagId, ON);
    SetEventFlagID(eventFlagId2, OFF);
    SetEventFlagID(eventFlagId3, OFF);
    WaitFor(EventFlag(eventFlagId3));
    SetEventFlagID(eventFlagId, OFF);
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(!EventFlag(eventFlagId3));
    RestartEvent();
});

$Event(1600, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(50));
    GotoIf(L0, EventFlag(2000));
    GotoIf(L1, EventFlag(2001));
    GotoIf(L2, EventFlag(2002));
L0:
L9:
L1:
L9_:
L2:
L9__:
L9___:
    SetEventFlagID(50, ON);
    EndEvent();
});

$Event(1601, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(50));
    GotoIf(L0, EventFlag(2000));
    GotoIf(L1, EventFlag(2001));
    GotoIf(L2, EventFlag(2002));
L0:
    AwardGesture(0);
    AwardGesture(2);
    AwardGesture(7);
    AwardGesture(8);
    AwardGesture(20);
    AwardGesture(21);
    AwardGesture(22);
    AwardGesture(23);
    AwardGesture(24);
    AwardGesture(30);
    AwardGesture(50);
    AwardGesture(52);
    AwardGesture(60);
    AwardGesture(70);
    AwardGesture(71);
L9:
L1:
    AwardGesture(0);
    AwardGesture(2);
    AwardGesture(7);
    AwardGesture(8);
    AwardGesture(20);
    AwardGesture(21);
    AwardGesture(22);
    AwardGesture(23);
    AwardGesture(24);
    AwardGesture(30);
    AwardGesture(50);
    AwardGesture(52);
    AwardGesture(60);
    AwardGesture(70);
    AwardGesture(71);
L9_:
L2:
    AwardGesture(0);
    AwardGesture(2);
    AwardGesture(7);
    AwardGesture(8);
    AwardGesture(20);
    AwardGesture(21);
    AwardGesture(22);
    AwardGesture(23);
    AwardGesture(24);
    AwardGesture(30);
    AwardGesture(50);
    AwardGesture(52);
    AwardGesture(60);
    AwardGesture(70);
    AwardGesture(71);
L9__:
L9___:
    EndEvent();
});

$Event(1610, Restart, function() {
    DisableNetworkSync();
    if (EventFlag(6950)) {
        if (!EventFlag(61000)) {
            WaitFixedTimeFrames(3);
            WaitFor(CutsceneEnded());
            AwardGesture(140);
        }
        RemoveGesture(141);
        SetEventFlagID(61000, ON);
        SetEventFlagID(61001, OFF);
        EndEvent();
    }
    if (EventFlag(6960)) {
        RemoveGesture(140);
        if (!EventFlag(61001)) {
            WaitFixedTimeFrames(3);
            WaitFor(CutsceneEnded());
            AwardGesture(141);
        }
        SetEventFlagID(61000, OFF);
        SetEventFlagID(61001, ON);
        EndEvent();
    }
    RemoveGesture(140);
    SetEventFlagID(61000, OFF);
});

$Event(1680, Restart, function(activityId, eventFlagId, timeSeconds) {
    DisableNetworkSync();
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(eventFlagId));
    WaitFixedTimeSeconds(timeSeconds);
    StartPS5Activity(activityId);
});

$Event(1690, Restart, function(activityId, eventFlagId, timeSeconds) {
    DisableNetworkSync();
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(eventFlagId));
    WaitFixedTimeSeconds(timeSeconds);
    EndPS5Activity(activityId);
});

$Event(1700, Restart, function(achievementId, eventFlagId, timeSeconds) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    WaitFixedTimeSeconds(timeSeconds);
    AwardAchievement(achievementId);
});

$Event(1900, Restart, function() {
    WaitFor(cond);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(200, ON);
        SetEventFlagID(201, OFF);
        EndEvent();
    }
L0:
    SetEventFlagID(200, OFF);
    SetEventFlagID(201, ON);
    EndEvent();
});

$Event(1901, Restart, function() {
    DisableNetworkSync();
    SetEventFlagID(202, OFF);
    SetEventFlagID(203, ON);
    WaitFor(
        HasMultiplayerState(MultiplayerState.MultiplayerPending)
            || HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlagID(202, ON);
    SetEventFlagID(203, OFF);
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.MultiplayerPending)
            || HasMultiplayerState(MultiplayerState.Multiplayer)));
    SetEventFlagID(202, OFF);
    SetEventFlagID(203, ON);
    RestartEvent();
});

$Event(1902, Default, function() {
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(210, OFF);
    }
    SetEventFlagID(211, OFF);
    WaitFor(
        PlayerInMap(10, 0, 0, 0)
            || PlayerInMap(11, 0, 0, 0)
            || PlayerInMap(12, 0, 0, 0)
            || PlayerInMap(13, 0, 0, 0)
            || PlayerInMap(14, 0, 0, 0)
            || PlayerInMap(15, 0, 0, 0)
            || PlayerInMap(16, 0, 0, 0));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(210, ON);
    }
    SetEventFlagID(211, ON);
    WaitFor(
        !(PlayerInMap(10, 0, 0, 0)
            || PlayerInMap(11, 0, 0, 0)
            || PlayerInMap(12, 0, 0, 0)
            || PlayerInMap(13, 0, 0, 0)
            || PlayerInMap(14, 0, 0, 0)
            || PlayerInMap(15, 0, 0, 0)
            || PlayerInMap(16, 0, 0, 0)));
    RestartEvent();
});

$Event(1903, Default, function() {
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(220, OFF);
    }
    SetEventFlagID(221, OFF);
    WaitFor(
        PlayerInMap(10, 0, 0, 0)
            || PlayerInMap(11, 0, 0, 0)
            || PlayerInMap(12, 0, 0, 0)
            || PlayerInMap(13, 0, 0, 0)
            || PlayerInMap(14, 0, 0, 0)
            || PlayerInMap(15, 0, 0, 0)
            || PlayerInMap(16, 0, 0, 0));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(220, ON);
    }
    SetEventFlagID(221, ON);
    WaitFor(
        !(PlayerInMap(10, 0, 0, 0)
            || PlayerInMap(11, 0, 0, 0)
            || PlayerInMap(12, 0, 0, 0)
            || PlayerInMap(13, 0, 0, 0)
            || PlayerInMap(14, 0, 0, 0)
            || PlayerInMap(15, 0, 0, 0)
            || PlayerInMap(16, 0, 0, 0)));
    RestartEvent();
});

$Event(1904, Default, function() {
    DisableNetworkSync();
    ChangeCamera(-1);
});

$Event(1905, Restart, function() {
    GotoIf(L1, PlayAreaCurrentTimeInRange(5, 30, 0, 11, 59, 59));
    GotoIf(L2, PlayAreaCurrentTimeInRange(12, 0, 0, 19, 59, 59));
    GotoIf(L3, PlayAreaCurrentTimeInRange(20, 0, 0, 5, 29, 59));
L1:
    SetEventFlagID(530, ON);
    SetEventFlagID(531, OFF);
    SetEventFlagID(532, OFF);
    WaitFor(!PlayAreaCurrentTimeInRange(6, 0, 0, 11, 59, 59));
    RestartEvent();
L2:
    SetEventFlagID(530, OFF);
    SetEventFlagID(531, ON);
    SetEventFlagID(532, OFF);
    WaitFor(!PlayAreaCurrentTimeInRange(12, 0, 0, 19, 59, 59));
    RestartEvent();
L3:
    SetEventFlagID(530, OFF);
    SetEventFlagID(531, OFF);
    SetEventFlagID(532, ON);
    WaitFor(!PlayAreaCurrentTimeInRange(20, 0, 0, 5, 59, 59));
    RestartEvent();
});

$Event(1906, Default, function(eventFlagId, weather) {
    DisableNetworkSync();
    SetEventFlagID(eventFlagId, OFF);
    WaitFor(WeatherActive(weather, 0, 0));
    WaitFixedTimeFrames(1);
    SetEventFlagID(eventFlagId, ON);
    WaitFor(!WeatherActive(weather, 0, 0));
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(1907, Restart, function() {
    DisableNetworkSync();
    GotoIf(L0, WeatherActive(Weather.Type01, 0, 0));
    GotoIf(L1, 
        WeatherActive(Weather.Type00, 0, 0)
            || WeatherActive(Weather.Type10, 0, 0)
            || WeatherActive(Weather.Type11, 0, 0));
    GotoIf(L2, 
        WeatherActive(Weather.Type20, 0, 0)
            || WeatherActive(Weather.Type21, 0, 0)
            || WeatherActive(Weather.Type30, 0, 0)
            || WeatherActive(Weather.Type52, 0, 0));
    GotoIf(L3, WeatherActive(Weather.Type40, 0, 0) || WeatherActive(Weather.Type41, 0, 0));
    GotoIf(L4, WeatherActive(Weather.Type50, 0, 0) || WeatherActive(Weather.Type51, 0, 0));
    GotoIf(L5, WeatherActive(Weather.Type31, 0, 0) || WeatherActive(Weather.Type60, 0, 0));
    SetEventFlagID(570, OFF);
    SetEventFlagID(571, OFF);
    SetEventFlagID(572, OFF);
    SetEventFlagID(573, OFF);
    SetEventFlagID(574, OFF);
    SetEventFlagID(575, OFF);
    WaitFixedTimeSeconds(3);
    RestartEvent();
L0:
    SetEventFlagID(570, ON);
    SetEventFlagID(571, OFF);
    SetEventFlagID(572, OFF);
    SetEventFlagID(573, OFF);
    SetEventFlagID(574, OFF);
    SetEventFlagID(575, OFF);
    WaitFor(!WeatherActive(Weather.Type01, 0, 0));
    RestartEvent();
L1:
    SetEventFlagID(570, OFF);
    SetEventFlagID(571, ON);
    SetEventFlagID(572, OFF);
    SetEventFlagID(573, OFF);
    SetEventFlagID(574, OFF);
    SetEventFlagID(575, OFF);
    WaitFor(
        !(WeatherActive(Weather.Type00, 0, 0)
            || WeatherActive(Weather.Type10, 0, 0)
            || WeatherActive(Weather.Type11, 0, 0)));
    RestartEvent();
L2:
    SetEventFlagID(570, OFF);
    SetEventFlagID(571, OFF);
    SetEventFlagID(572, ON);
    SetEventFlagID(573, OFF);
    SetEventFlagID(574, OFF);
    SetEventFlagID(575, OFF);
    WaitFor(
        !(WeatherActive(Weather.Type20, 0, 0)
            || WeatherActive(Weather.Type21, 0, 0)
            || WeatherActive(Weather.Type30, 0, 0)
            || WeatherActive(Weather.Type52, 0, 0)));
    RestartEvent();
L3:
    SetEventFlagID(570, OFF);
    SetEventFlagID(571, OFF);
    SetEventFlagID(572, OFF);
    SetEventFlagID(573, ON);
    SetEventFlagID(574, OFF);
    SetEventFlagID(575, OFF);
    WaitFor(!(WeatherActive(Weather.Type40, 0, 0) || WeatherActive(Weather.Type41, 0, 0)));
    RestartEvent();
L4:
    SetEventFlagID(570, OFF);
    SetEventFlagID(571, OFF);
    SetEventFlagID(572, OFF);
    SetEventFlagID(573, OFF);
    SetEventFlagID(574, ON);
    SetEventFlagID(575, OFF);
    WaitFor(!(WeatherActive(Weather.Type50, 0, 0) || WeatherActive(Weather.Type51, 0, 0)));
    RestartEvent();
L5:
    SetEventFlagID(570, OFF);
    SetEventFlagID(571, OFF);
    SetEventFlagID(572, OFF);
    SetEventFlagID(573, OFF);
    SetEventFlagID(574, OFF);
    SetEventFlagID(575, ON);
    WaitFor(!(WeatherActive(Weather.Type31, 0, 0) || WeatherActive(Weather.Type60, 0, 0)));
    RestartEvent();
});

$Event(1908, Default, function() {
    WaitFor(CharacterHasSpEffect(10000, 8998));
    DeactivateGparamOverride(3);
    ChangeWeather(Weather.Type00, 1, false);
    ClearSpEffect(10000, 8998);
    WaitFixedTimeSeconds(1.2);
    RestartEvent();
});

$Event(1909, Default, function() {
    DisableNetworkSync();
    GotoIf(L0, EventFlag(9021));
    GotoIf(L1, EventFlag(1099002100));
    SuppressSE(SoundType.BGM, 0, false);
    WaitFor(EventFlag(1099002100) || EventFlag(9021));
    RestartEvent();
L0:
    SuppressSE(SoundType.BGM, 0, true);
    SetEventFlagID(9021, OFF);
    WaitFor(ElapsedSeconds(1) || EventFlag(1099002100));
    GotoIf(L2, EventFlag(1099002100));
    RestartEvent();
L1:
    SuppressSE(SoundType.BGM, 0, true);
L2:
    WaitFor(!EventFlag(1099002100));
    WaitFixedTimeFrames(1);
    RestartEvent();
});
