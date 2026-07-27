// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    if (IsMapVariation(0)) {
        if (EventFlag(49710000)) {
            $InitializeCommonEvent(0, 90055000, 49715200, 1, 49712200, 49710201);
            $InitializeCommonEvent(0, 90055001, 49715200, 1, 49710201, 49710200);
        }
        if (EventFlag(49710001)) {
            $InitializeCommonEvent(0, 90055000, 49715200, 2, 49712200, 49710201);
            $InitializeCommonEvent(0, 90055001, 49715200, 2, 49710201, 49710200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49710200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49712200, 49710200);
    }
    $InitializeCommonEvent(0, 90065121, 49710200, 49710205, 49710800, 941000, 690047, 49715210, 49710800, 903800712, 49710810, 903800711, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49710200, 49710800, 941000, 49715210, 49710800, 903800712, 49710810, 903800711, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49710800, 1, 0, 0, 1050, 941000, 903800712, 49710800);
    }
    $InitializeCommonEvent(0, 90015012, 49715210, 49710200);
    $InitializeCommonEvent(1, 90015012, 0, 49710200);
    $InitializeCommonEvent(0, 90015020, 49710200, 49710800);
    $InitializeCommonEvent(0, 90015008, 49710205, 49710800, 941000, 49715210, -1, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065137, 49710800, 49710810, 49710200, 49710800, 903800711, 49710206, 0.8);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065138, 49710800, 49710810, 49710200, 49710800, 903800711, 49710206, 49710207, 0.8);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49712200, 49710800);
        $InitializeCommonEvent(0, 90015023, 49710200, 40, 0, 49715210, 49710800, 903800712, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015026, 49710206, 40, 0, 49715210, 49710810, 903800711);
        $InitializeCommonEvent(0, 90015030, 49710200, 49715210, 40, 941000, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49710200, 49710800, 49715210, 1020, 941000, 110320, 903800712, 49710800);
        $InitializeCommonEvent(0, 90015470, 49712200, 49710200, 49710800, 49715210, 0, 0, 49715210);
        $InitializeCommonEvent(0, 90015478, 49710800, 49710800);
        $InitializeCommonEvent(0, 90015478, 49710810, 49710800);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015446, 49715210, 49710200, 49710800, 49712200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015460, 49712200, 49710800);
        $InitializeCommonEvent(0, 90015460, 49712200, 49710810);
        $InitializeCommonEvent(0, 90015460, 49712200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49712200, 49710800);
        $InitializeCommonEvent(0, 90015475, 49712200, 49710810);
        $InitializeCommonEvent(0, 90015475, 49712200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49710800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49710000, 49710300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49710000, 49710300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49710000, 49710300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49710000, 49710300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49710000, 49710300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49710000, 49710300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49710000, 49710301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49710000, 49710301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49710000, 49710301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49710000, 49710301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49710000, 49710301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49710000, 49710301);
    }
});

$Event(49712800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3, chrEntityId3) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(HPRatio(chrEntityId) <= 0);
    WaitFor(HPRatio(chrEntityId3) <= 0);
    WaitFixedTimeSeconds(4);
    WaitFor(CharacterDead(chrEntityId));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 902500520);
    DisplayBossHealthBar(Disabled, chrEntityId3, 1, 902500520);
    if (assetEntityId != 0) {
        EnableAsset(assetEntityId);
    }
    if (chrEntityId2 != 0) {
        EnableCharacter(chrEntityId2);
    }
    if (!EventFlag(eventFlagId3)) {
        SetEventFlagID(eventFlagId, ON);
        EndEvent();
    }
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(ElapsedSeconds(3));
    DisableCharacter(chrEntityId);
    DisableCharacter(chrEntityId3);
});

$Event(49712810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5, chrEntityId2) {
    if (EventFlag(eventFlagId4) || EventFlag(eventFlagId5)) {
        DisableCharacter(chrEntityId);
        DisableCharacter(chrEntityId2);
        DisableCharacterCollision(chrEntityId);
        DisableCharacterCollision(chrEntityId2);
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId);
    DisableCharacter(chrEntityId2);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterCollision(chrEntityId2);
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId2);
    flag = EventFlag(7515) && (EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId3));
    WaitFixedTimeSeconds(1);
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId2);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterCollision(chrEntityId2);
    EnableCharacterAI(chrEntityId);
    EnableCharacterAI(chrEntityId2);
    ForceAnimationPlayback(48600800, 20005, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId2);
    EnableCharacterAI(chrEntityId);
    EnableCharacterAI(chrEntityId2);
    SetNetworkUpdateRate(48600800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
});


